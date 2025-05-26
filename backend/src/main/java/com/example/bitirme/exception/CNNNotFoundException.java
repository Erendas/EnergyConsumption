package com.example.bitirme.exception;

import org.hibernate.service.spi.ServiceException;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class CNNNotFoundException extends ServiceException {

	private static final long serialVersionUID = 1L;
	private static String message = "Disk Dolu";

	public CNNNotFoundException() {
		super(message);
	}

	public CNNNotFoundException(Exception e) {
		this();
		log.error(message, e);
	}

}
