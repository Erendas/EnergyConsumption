package com.example.bitirme.exception;

import org.hibernate.service.spi.ServiceException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class LSTMNotFoundException extends ServiceException {

	private static final long serialVersionUID = 1L;
	private static String message = "Disk Dolu";

	public LSTMNotFoundException() {
		super(message);
	}

	public LSTMNotFoundException(Exception e) {
		this();
		log.error(message, e);
	}

}