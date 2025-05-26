package com.example.bitirme.repository;

import com.example.bitirme.model.Month;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MonthRepository extends JpaRepository<Month, Long> {
    // Custom query methods can be added here if needed
}