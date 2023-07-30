package com.azin.javaspringboottokengenerate.output;

import lombok.Data;

@Data
public class TokenOutput {

    public TokenOutput(String token,Boolean isValid){
        this.token = token;
        this.isValid = isValid;
    }

    private String token;
    private Boolean isValid;
}
