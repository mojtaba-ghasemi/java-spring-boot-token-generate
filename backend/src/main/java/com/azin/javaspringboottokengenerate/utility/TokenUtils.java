package com.azin.javaspringboottokengenerate.utility;

import org.springframework.util.StringUtils;

import java.util.Random;

public class TokenUtils {

    public static String generateToken(int[] availableDigits) {

        String token = "";
        int[] tokenArray = generateTokenArray(availableDigits);
        int checkDigit = LuhnUtils.getCheckDigit(tokenArray);


        for (int i = 0; i < 15; i++) {
            token += tokenArray[i];
            if (i == 3 || i == 7 || i == 11)
                token += "-";
        }
        token += checkDigit;

        return token;
    }

    private static int[] generateTokenArray(int[] availableDigits) {

        int[] tokenArray = new int[15];
        if (availableDigits.length == 0)
            availableDigits = new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};

        Random rn = new Random();
        for (int i = 0; i < 15; i++) {
            int index = rn.nextInt(availableDigits.length);
            tokenArray[i] = availableDigits[index];
        }

        return tokenArray;
    }

    public static boolean validateToken(String toke) {

        String tokenPureDigit = toke.replaceAll("-", "");
        int[] tokenIntArray = new int[16];

        for (int i = 0; i < tokenPureDigit.length(); i++) {
            tokenIntArray[i] = tokenPureDigit.charAt(i) - '0';
        }

        return LuhnUtils.IsValidLuhn(tokenIntArray);
    }
}
