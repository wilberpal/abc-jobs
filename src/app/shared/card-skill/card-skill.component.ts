import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skill',
  templateUrl: './card-skill.component.html',
  styleUrls: ['./card-skill.component.scss'],
})
export class CardSkillComponent implements OnInit {
  percentage: number = 20;
  @Input() item:any=[]
  constructor() { }

  ngOnInit() { }


  calculateStrokeOffset(percentage: number): string {
    const circumference = 88;  // Circunferencia del círculo con radio 14.
    const offset = circumference * (1 - (percentage / 100));
    return `${offset}`;
  }

}
