package com.example.bitirme.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.example.bitirme.service.MonthService;
import com.example.bitirme.model.Month;

import java.util.List;

@RestController
@RequestMapping("/month")
public class MonthController {

    @Autowired
    private MonthService monthService;

    @PostMapping
    public ResponseEntity<Month> createMonth(@RequestBody Month month) {
        return ResponseEntity.ok(monthService.createMonth(month));
    }

    @GetMapping("/{monthId}")
    public ResponseEntity<Month> getByMonthId(@PathVariable Long monthId) {
        return ResponseEntity.ok(monthService.getByMonthId(monthId));
    }

    // Add more endpoints as needed
}