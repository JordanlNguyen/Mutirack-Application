package com.musitrack.demo.user;

public class UserResponseModel {
    private String status;
    private String message;
    private String jwt;
    public UserResponseModel(String status, String message, String jwt) {
        this.status = status;
        this.message = message;
        this.jwt = jwt;
    }

    public String getStatus() {
        return status;
    }
    public String getMessage() {
        return message;
    }
    public String getJwt() {
        return jwt;
    }

    public void setStatus(String status) {
        this.status = status;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public void setJwt(String jwt) {
        this.jwt = jwt;
    }
}
