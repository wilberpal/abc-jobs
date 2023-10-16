import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-enterprise',
  templateUrl: './create-enterprise.component.html',
  styleUrls: ['./create-enterprise.component.scss'],
})
export class CreateEnterpriseComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  backPage() {
    window.history.back();
  }

  sendToLogin() {
    this.router.navigate(['/login']);
  }

  sendToEnterprise() {
    this.router.navigate(['/user/verify-account']);
  }

}
