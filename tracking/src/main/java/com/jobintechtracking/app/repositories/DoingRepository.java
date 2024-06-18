package com.jobintechtracking.app.repositories;

import com.jobintechtracking.app.entities.Doing;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DoingRepository extends JpaRepository<Doing, Long> {
}
