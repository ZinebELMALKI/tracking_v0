package com.jobintechtracking.app.entities;

import com.jobintechtracking.app.enums.StepProcess;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Steps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private String description;

    private Number duration ;


    @ManyToOne
    @JoinColumn(name = "parcours_id")
    private Parcours parcours;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "doing_id", referencedColumnName = "id")
    private Doing doing;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "learning_id", referencedColumnName = "id")
    private Learning learning;

    @Enumerated(EnumType.STRING)
    private StepProcess stepProcess;


}
