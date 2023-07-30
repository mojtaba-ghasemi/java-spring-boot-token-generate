package com.azin.javaspringboottokengenerate.controller;

import com.azin.javaspringboottokengenerate.input.TokenInput;
import com.azin.javaspringboottokengenerate.output.TokenOutput;
import com.azin.javaspringboottokengenerate.utility.LuhnUtils;
import com.azin.javaspringboottokengenerate.utility.TokenUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@Controller
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/TokenManagement")
public class TokenManagementController {

    @PostMapping(value = "GeneratorService")
    public ResponseEntity GeneratorService(@RequestBody TokenInput tokenInput) {

        return ResponseEntity.status(HttpStatus.OK).body(
                new TokenOutput(TokenUtils.generateToken(tokenInput.getAvailableDigits()), true));
    }

    @GetMapping(value = "ValidatorService/{token}")
    public ResponseEntity ValidatorService(@PathVariable String token) {

        return ResponseEntity.status(HttpStatus.OK).body(
                new TokenOutput(token, TokenUtils.validateToken(token)));
    }

}
