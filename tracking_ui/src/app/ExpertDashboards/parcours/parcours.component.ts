import { Component, OnInit } from '@angular/core';
import { Parcours } from '../../models/parcours';
import { ParcoursService } from '../../services/parcours/parcours.service';

@Component({
  selector: 'app-parcours',
  templateUrl: './parcours.component.html',
  styleUrl: './parcours.component.css'
})
export class ParcoursComponent implements OnInit {

  parcoursList: Parcours[] = [];

  constructor(private parcoursService: ParcoursService) { }

  ngOnInit(): void {
    this.loadParcours();


  }

  loadParcours() {
    this.parcoursService.getAllParcours().subscribe(
      (data) => {
        this.parcoursList = data;
      },
      (error) => {
        console.error('Error fetching parcours', error);
      }
    );
  }




}
