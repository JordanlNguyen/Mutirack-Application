package com.musitrack.demo.user;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.util.Optional;
import java.security.Key;
import java.util.Date;

@Service
public class UserServices {

    private static final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

    private final BCryptPasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    public UserServices(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public UserResponseModel loginUser(LoginRequestModel request) {
        //find user name
        //decode password
        //check match
        // return success, message, JWT
        Optional<UserModel> DB_DATA = userRepository.findByUsername(request.getUsername());
        if (DB_DATA.isEmpty()) {
            return new UserResponseModel("failed", "User not found", "NA");
        }
        UserModel user = DB_DATA.get();
        if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return new UserResponseModel("success", "Login Successful", generateTocken(user));
        } 
        else {
            return new UserResponseModel("failed", "Incorrect Password", "NA");
        }
    }
    
    public UserResponseModel registerUser(UserModel user) {
        //check if user exist
        //hash password
        //inject user into DB

        if (userRepository.existsByUsername(user.getUsername())) {
            return new UserResponseModel("failed", "Username already exists", "NA");
        }
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);

        userRepository.save(user);

        return new UserResponseModel("success", "User Registered Successfully", generateTocken(user));
    }

    private static String generateTocken(UserModel user){
        long expirationTime = 1000 * 60 * 60; // 1 hour in milliseconds
        return Jwts.builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))
                .signWith(key)
                .compact();
    }
}
