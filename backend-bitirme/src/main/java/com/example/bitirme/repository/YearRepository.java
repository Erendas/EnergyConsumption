package com.example.bitirme.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.bitirme.model.Year;

@Repository
public interface YearRepository extends JpaRepository<Year, Long> {
    // You can add custom query methods if needed
}