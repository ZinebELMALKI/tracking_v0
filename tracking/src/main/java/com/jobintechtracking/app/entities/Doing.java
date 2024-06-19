package com.jobintechtracking.app.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class  Doing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String url;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "step_id", referencedColumnName = "id")
    private Steps step;

}
