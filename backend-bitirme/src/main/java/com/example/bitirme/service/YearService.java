package com.example.bitirme.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.bitirme.model.Year;
import com.example.bitirme.repository.YearRepository;

import java.util.Optional;

@Service
public class YearService {

    @Autowired
    private YearRepository yearRepository;

    public Year createYear(Year year) {
        return yearRepository.save(year);
    }

    public Year getByYearId(Long yearId) {
        return yearRepository.findById(yearId).orElseThrow(() -> new RuntimeException("Year not found"));
    }

    // Add more service methods as needed
}