package com.jobintechtracking.app.repositories;

import com.jobintechtracking.app.entities.Steps;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StepRepository extends JpaRepository<Steps, Long> {


}
