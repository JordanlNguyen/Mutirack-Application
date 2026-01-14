package com.musitrack.demo.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "users")
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String first_name;
    private String last_name;
    private String password;

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return this.password;
    }
    public String getUsername() {
        return this.username;
    }
    public String getFirst_name() {
        return this.first_name;
    }
    public String getLast_name() {
        return this.last_name;
    }

}
