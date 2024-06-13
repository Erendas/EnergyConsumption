package com.example.bitirme.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.example.bitirme.service.YearService;
import com.example.bitirme.model.Year;

import java.util.List;

@RestController
@RequestMapping("/year")
public class YearController {

    @Autowired
    private YearService yearService;

    @PostMapping
    public ResponseEntity<Year> createYear(@RequestBody Year year) {
        return ResponseEntity.ok(yearService.createYear(year));
    }

    @GetMapping("/{yearId}")
    public ResponseEntity<Year> getByYearId(@PathVariable Long yearId) {
        return ResponseEntity.ok(yearService.getByYearId(yearId));
    }

    // Add more endpoints as needed
}