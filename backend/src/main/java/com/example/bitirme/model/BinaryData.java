package com.example.bitirme.model;

import jakarta.persistence.*;

@Entity
@Table(name = "binary_data")
public class BinaryData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(name = "data", nullable = false)
    private byte[] data;

    // Constructors, getters, and setters
    public BinaryData() {}

    public BinaryData(byte[] data) {
        this.data = data;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}