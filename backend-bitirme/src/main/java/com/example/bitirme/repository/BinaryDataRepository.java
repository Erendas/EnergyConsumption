package com.example.bitirme.repository;

import com.example.bitirme.model.BinaryData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BinaryDataRepository extends JpaRepository<BinaryData, Long> {
    
    // Custom query method to find binary data by some criteria
    Optional<BinaryData> findById(Long id);
    
    // You can define more custom query methods as needed
}