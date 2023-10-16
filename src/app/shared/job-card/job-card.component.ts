import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent  implements OnInit {
  @Input() title:string='';
  @Input() text:string='';
  @Input() option:number=0;
  constructor(private router:RouterModule) { }

  ngOnInit() {}

}
