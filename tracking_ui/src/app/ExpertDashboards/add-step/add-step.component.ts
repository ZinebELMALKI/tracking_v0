import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StepsService } from '../../services/steps/steps.service';
import { Step } from '../../models/step';
import { Parcours } from '../../models/parcours';
import { Observable, map, startWith } from 'rxjs';
import { ParcoursService } from '../../services/parcours/parcours.service';


@Component({
  selector: 'app-add-step',
  templateUrl: './add-step.component.html',
  styleUrl: './add-step.component.css'
})
export class AddStepComponent implements OnInit {
  stepForm!: FormGroup;
  parcoursCtrl = new FormControl();
  filteredParcours!: Observable<Parcours[]>;
  allParcours: Parcours[] = [];
  par!: String;
  step!: Step;


  constructor(private fb: FormBuilder, private stepsService: StepsService, private parcoursService: ParcoursService) {
    this.stepForm = this.fb.group({
      title: [''],
      description: [''],
      duration: [''],
      parcours: [''],
      stepProcess: ['']
    });

    
  }

  ngOnInit(): void {
    this.loadParcours();
    this.filteredParcours = this.parcoursCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterParcours(value))
    );


  }

  private _filterParcours(value: string): Parcours[] {
    const filterValue = value.toLowerCase();
    return this.allParcours.filter(parcours => parcours.parcoursName.toLowerCase().includes(filterValue));
  }

  loadParcours() {
    this.parcoursService.getAllParcours().subscribe(
      data => {
        this.allParcours = data;
      },
      error => {
        console.error('Erreur lors du chargement des parcours: ', error);
      }
    );
  }


  onParcoursSelected(parcours: Parcours) {
    this.par = parcours.parcoursName;
    this.step.parcours = parcours;
    this.parcoursCtrl.setValue(parcours.parcoursName, { emitEvent: false });
  }


  saveStep(): void {
    if (this.stepForm.valid) {
      this.step = this.stepForm.value;
      console.log(this.step)
      this.stepsService.saveStep(this.step).subscribe({
        next: (response) => {
          console.log('Step saved:', response);
          alert("Step saved")
        },
        error: (err) => {
          console.error('Error saving step:', err);

        }
      })
    }
  }


  


}
