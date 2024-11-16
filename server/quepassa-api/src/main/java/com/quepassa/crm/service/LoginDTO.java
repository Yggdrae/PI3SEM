package com.quepassa.crm.service;

import lombok.Data;

@Data
public class LoginDTO {

    private String nameOrEmail;
    private String password;
    
    public String getNameOrEmail() {
        return nameOrEmail;
    }
    public String getPassword() {
        return password;
    }
    
}
