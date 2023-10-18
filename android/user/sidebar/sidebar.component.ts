import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  sendToProject(){
    this.router.navigate(['/user/web/projects']);

  }

  sendToInterview(){
    this.router.navigate(['user/web/interview']);

  }

  sendToApplicant(){
    this.router.navigate(['user/web/applicant']);

  }


}
