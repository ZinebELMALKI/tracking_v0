package com.jobintechtracking.app.services;


import com.jobintechtracking.app.entities.Steps;
import com.jobintechtracking.app.repositories.StepRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StepsService {

    StepRepository stepRepository;
    public StepsService(StepRepository stepRepository) {
        this.stepRepository = stepRepository;
    }

    public Steps save(Steps steps) {
        return stepRepository.save(steps);
    }


    public Steps findById(Long id) {
        return  stepRepository.findById(id).orElse(null);
    }

    public List<Steps> findAll(){
        return stepRepository.findAll();
    }



    public Steps UpdateStep(Steps step) {
        return stepRepository.save(step);
    }

    public void deleteStep(Long id) {
        stepRepository.deleteById(id);
    }

    public List<Steps> findByParcoursId(Long parcoursId) {
        return stepRepository.findByParcoursId(parcoursId);
    }
}
