package com.jobintechtracking.app.repositories;

import com.jobintechtracking.app.entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Long> {
}
