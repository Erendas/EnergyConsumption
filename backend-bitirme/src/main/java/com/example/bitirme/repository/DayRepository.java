package com.example.bitirme.repository;

import com.example.bitirme.model.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DayRepository extends JpaRepository<Day, Long> {
    // Custom query methods can be added here if needed
}