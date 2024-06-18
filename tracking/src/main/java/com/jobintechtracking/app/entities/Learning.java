package com.jobintechtracking.app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Learning {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String description;
    private String url;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "step_id", referencedColumnName = "id")
    private Steps step;


}
