package com.example.bitirme.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.example.bitirme.service.DayService;
import com.example.bitirme.model.Day;

import java.util.List;

@RestController
@RequestMapping("/day")
public class DayController {

    @Autowired
    private DayService dayService;

    @PostMapping
    public ResponseEntity<Day> createDay(@RequestBody Day day) {
        return ResponseEntity.ok(dayService.createDay(day));
    }

    @GetMapping("/{dayId}")
    public ResponseEntity<Day> getByDayId(@PathVariable Long dayId) {
        return ResponseEntity.ok(dayService.getByDayId(dayId));
    }

    // Add more endpoints as needed
}