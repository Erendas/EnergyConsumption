package com.example.bitirme.service;

import com.example.bitirme.model.Month;
import com.example.bitirme.repository.MonthRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MonthService {

    @Autowired
    private MonthRepository monthRepository;

    public Month createMonth(Month month) {
        return monthRepository.save(month);
    }

    public Month getByMonthId(Long monthId) {
        return monthRepository.findById(monthId).orElseThrow(() -> new RuntimeException("Month not found"));
    }

    // Add more service methods as needed
}