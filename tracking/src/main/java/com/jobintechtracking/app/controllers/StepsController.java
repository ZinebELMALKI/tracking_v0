package com.jobintechtracking.app.controllers;

import com.jobintechtracking.app.entities.Doing;
import com.jobintechtracking.app.entities.Steps;
import com.jobintechtracking.app.services.StepsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/steps")
public class StepsController {

    private final StepsService stepsService;

    @Autowired
    public StepsController(StepsService stepsService) {
        this.stepsService = stepsService;
    }

    @PostMapping
    public ResponseEntity<Steps> saveSteps(@RequestBody Steps steps) {
        Steps savedSteps = stepsService.save(steps);
        return ResponseEntity.ok(savedSteps);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Steps> getStepsById(@PathVariable Long id) {
        Steps steps = stepsService.findById(id);
        if (steps != null) {
            return ResponseEntity.ok(steps);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("parcours/{id}")
    public ResponseEntity<List<Steps>> findByParcoursId(@PathVariable Long id) {
        List<Steps> steps = stepsService.findByParcoursId(id);
            return ResponseEntity.ok(steps);

    }

    public ResponseEntity<List<Steps>> getAllSteps() {
        List<Steps> steps = stepsService.findAll();
        return ResponseEntity.ok(steps);
    }

    @PutMapping("/{id}")
    public Steps updateSteps(@PathVariable Long id, @RequestBody Steps step) {
        return stepsService.UpdateStep(step);
    }

    @DeleteMapping("/{id}")
    public void deleteSteps(@PathVariable Long id) {
        stepsService.deleteStep(id);
    }
}