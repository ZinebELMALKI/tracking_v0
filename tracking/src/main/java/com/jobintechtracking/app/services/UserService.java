package com.jobintechtracking.app.services;

import com.jobintechtracking.app.entities.Users;
import com.jobintechtracking.app.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userrepository;

    public List<Users> findAll() {
        return userrepository.findAll();
    }

    public Users save(Users users) {
        return userrepository.save(users);
    }

    public Users findUserById(Long id) {
        return userrepository.findById(id).orElse(null);

    }

    public void deleteUserById(Long id) {
         userrepository.deleteById(id);
    }
}
