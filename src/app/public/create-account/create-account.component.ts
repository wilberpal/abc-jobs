import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent  implements OnInit {
  mostrarContrasena = false;
  confirmarContrasena = false;
  constructor(private router: Router,
    private translate:TranslateService) {

    }

  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
      this.translate.use(lang);
  }

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
