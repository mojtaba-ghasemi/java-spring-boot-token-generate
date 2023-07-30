package com.azin.javaspringboottokengenerate.input;
import lombok.Data;

@Data
public class TokenInput {

    private int[] availableDigits;
    private String token;
}
