package com.example.bitirme.model;
import jakarta.persistence.*;

@Entity
public class LSTM {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modelType; // CNN, LSTM, Naive, Arima
    private byte[] binaryData; // Binary data of the model result
    
    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    
    public void setModelType(String modelType) {
        this.modelType = modelType;
    }

    public String getModelType() {
        return modelType;
    }
    
    public void setBinaryData(byte[] binaryData) {
        this.binaryData = binaryData;
    }

    public byte[] getBinaryData() {
        return binaryData;
    }
}