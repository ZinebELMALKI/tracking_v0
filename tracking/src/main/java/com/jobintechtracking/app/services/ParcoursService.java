package com.jobintechtracking.app.services;


import com.jobintechtracking.app.entities.Parcours;
import com.jobintechtracking.app.repositories.ParcoursRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ParcoursService {

    private ParcoursRepository parcoursRepository;
    public ParcoursService(ParcoursRepository parcoursRepository) {
        this.parcoursRepository = parcoursRepository;
    }


    public Parcours save(Parcours parcours) {
        return parcoursRepository.save(parcours);
    }


    public Parcours findById(Long id) {
        return  parcoursRepository.findById(id).orElse(null);
    }

    public List<Parcours> findAll(){
        return parcoursRepository.findAll();
    }

    public Parcours update(Parcours parcours) {
        return parcoursRepository.save(parcours);
    }

    public void deleteById(Long id) {
        parcoursRepository.deleteById(id);
    }
}
