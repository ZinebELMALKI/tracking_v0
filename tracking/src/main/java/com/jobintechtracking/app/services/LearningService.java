package com.jobintechtracking.app.services;

import com.jobintechtracking.app.entities.Learning;
import com.jobintechtracking.app.repositories.LearningRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LearningService {

    LearningRepository learningRepository;
    public LearningService(LearningRepository learningRepository) {
        this.learningRepository = learningRepository;
    }

    public Learning save(Learning learning) {
        return learningRepository.save(learning);
    }

    public Learning update(Learning learning) {
        return learningRepository.save(learning);
    }

    public void deleteById(Long id) {
        learningRepository.deleteById(id);
    }


    public Learning findById(Long id) {
        return  learningRepository.findById(id).orElse(null);
    }

    public List<Learning> findAll(){
        return learningRepository.findAll();
    }


    public Learning Updatelearning(Learning learning) {
        return learningRepository.save(learning);
    }
}
