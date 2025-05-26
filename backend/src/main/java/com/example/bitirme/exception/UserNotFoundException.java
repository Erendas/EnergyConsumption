package com.example.bitirme.exception;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class UserNotFoundException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private static final String DEFAULT_MESSAGE = "User not found";

    public UserNotFoundException() {
        super(DEFAULT_MESSAGE);
    }

    public UserNotFoundException(String message) {
        super(message);
    }

    public UserNotFoundException(String message, Exception e) {
        super(message, e);
        log.error(message, e);
    }
}