import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
})
export class CreateAccountComponent  implements OnInit {
  accountDummie={
    user:"",
    phone:"",
    email:"",
    password:""

  }
  modeScreen:string = ''
  mostrarContrasena = false;
  confirmarContrasena = false;
  inputConfirmarContrasena:string = "";
  constructor(private router: Router,
    private translate:TranslateService) {

    }

  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
      this.translate.use(lang);
      const Mode = localStorage.getItem('DarkMode') || 'light';
      this.modeScreen = Mode;
      if(Mode === 'dark'){
        document.body.classList.toggle('dark', true);
      }
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
