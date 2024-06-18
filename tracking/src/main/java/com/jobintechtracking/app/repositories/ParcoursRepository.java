package com.jobintechtracking.app.repositories;


import com.jobintechtracking.app.entities.Parcours;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ParcoursRepository extends JpaRepository<Parcours, Long> {
}
