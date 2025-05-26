package com.example.bitirme.exception;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class EmailAlreadyExistsException extends RuntimeException {

    private static final long serialVersionUID = 1L;
    private static final String DEFAULT_MESSAGE = "Email already exists";

    public EmailAlreadyExistsException() {
        super(DEFAULT_MESSAGE);
    }

    public EmailAlreadyExistsException(String message) {
        super(message);
    }

    public EmailAlreadyExistsException(String message, Exception e) {
        super(message, e);
        log.error(message, e);
    }
}