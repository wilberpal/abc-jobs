import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mostrarContrasena = false;
  constructor(private router: Router,
     private translate: TranslateService) {
   }
  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
    const Mode = localStorage.getItem('DarkMode') || 'light';
    if(Mode === 'dark'){
      document.body.classList.toggle('dark', true);
    }
   }

  backPage() {
    window.history.back();
  }

  sendToForgot() {
    this.router.navigate(['/forgot-password']);
  }

  sendToCreate() {
    this.router.navigate(['/signup']);
  }

  sendToAccount() {
    this.router.navigate(['/user/profile']);
  }
}
