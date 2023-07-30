package com.azin.javaspringboottokengenerate.utility;

import java.lang.reflect.Array;

public class LuhnUtils {

    public static int getCheckDigit(int[] digits) {
        int sum = 0;
        boolean doubleDigit = true;
        for (int i = digits.length - 1; i >= 0; --i) {
            if (doubleDigit) {
                if (digits[i] > 4)
                    sum += digits[i] * 2 - 9;
                else
                    sum += digits[i] * 2;
            } else
                sum += digits[i];

            doubleDigit = !doubleDigit;
        }
        return 10 - (sum % 10);
    }


    public static boolean IsValidLuhn(int[] digits) {

        int[] mainDigits = new int[digits.length-1];
        System.arraycopy(digits , 0 , mainDigits , 0 , mainDigits.length);
        return (getCheckDigit(mainDigits) == digits[digits.length-1]);
    }

}
