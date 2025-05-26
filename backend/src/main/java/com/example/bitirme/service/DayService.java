package com.example.bitirme.service;

import com.example.bitirme.model.Day;
import com.example.bitirme.repository.DayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DayService {

    @Autowired
    private DayRepository dayRepository;

    public Day createDay(Day day) {
        return dayRepository.save(day);
    }

    public Day getByDayId(Long dayId) {
        return dayRepository.findById(dayId).orElseThrow(() -> new RuntimeException("Day not found"));
    }

    // Add more service methods as needed
}