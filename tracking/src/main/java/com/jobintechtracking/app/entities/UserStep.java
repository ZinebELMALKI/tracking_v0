package com.jobintechtracking.app.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.apache.catalina.User;

import java.util.Date;

@Entity
@Data
public class UserStep {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private Users user;
    @ManyToOne
    @JoinColumn(name = "step_id")
    private Steps step;
    private Date startDate;
    private Date endDate;

}
