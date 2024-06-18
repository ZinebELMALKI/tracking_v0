package com.jobintechtracking.app.services;

import com.jobintechtracking.app.entities.Doing;

import com.jobintechtracking.app.repositories.DoingRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class DoingService {

    DoingRepository doingRepository;
    public DoingService(DoingRepository doingRepository) {
        this.doingRepository = doingRepository;
    }

    public Doing save(Doing doing) {
        return doingRepository.save(doing);
    }


    public Doing findById(Long id) {
        return  doingRepository.findById(id).orElse(null);
    }

    public List<Doing> findAll(){
        return doingRepository.findAll();
    }

    public Doing UpdateDoing(Doing doing) {
         return doingRepository.save(doing);
    }

    public void deleteDoing(Long id) {
        doingRepository.deleteById(id);
    }
}
