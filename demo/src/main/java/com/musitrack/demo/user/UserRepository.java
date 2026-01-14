package com.musitrack.demo.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long>{
    
    Boolean existsByUsername(String username);
    Optional<UserModel> findByUsername(String username);
}
