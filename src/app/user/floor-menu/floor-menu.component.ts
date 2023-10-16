import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floor-menu',
  templateUrl: './floor-menu.component.html',
  styleUrls: ['./floor-menu.component.scss'],
})
export class FloorMenuComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  sendToProject(){
    this.router.navigate(['/user/project']);

  }

  sendToInterview(){
    this.router.navigate(['/interview']);

  }

  sendToApplicant(){
    this.router.navigate(['/applicant']);

  }
  sendToAccount(){
    this.router.navigate(['/user/profile']);

  }
  sendToIndex(){
    this.router.navigate(['/user/index']);

  }

}
