package com.jobintechtracking.app.repositories;


import com.jobintechtracking.app.entities.Learning;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LearningRepository extends JpaRepository<Learning, Long> {


}
