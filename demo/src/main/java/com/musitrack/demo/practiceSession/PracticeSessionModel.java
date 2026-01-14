package com.musitrack.demo.practiceSession;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class PracticeSessionModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String start;
    private String end;
    private String notes;
    private Long pieceId;
    
}
