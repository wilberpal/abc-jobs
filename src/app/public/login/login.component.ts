import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from 'src/app/services/auth/login.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mostrarContrasena = false;
  modeScreen: string = ""
  password: string = ""
  userName: string = ""
  constructor(private router: Router,
    private translate: TranslateService,
    private loginService: LoginService,
    private alertController: AlertController)
     {
  }
  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
    const Mode = localStorage.getItem('DarkMode') || 'light';
    this.modeScreen = Mode;
    if (Mode === 'dark') {
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


  login() {
    let data =
    {
      username: this.userName,
      password: this.password
    }
    this.loginService.login(data)
      .subscribe(
        (res: any) => {
          if(res.status.code === 200){
            localStorage.setItem("token", res.response.token)
            localStorage.setItem("token", res.response.username)
            this.sendToAccount();
          }
          else{
            this.ErrorCredenciales();
          }
        },
        (error: any) => {
          console.error("Ocurrió un error:", error);
          this.mostrarError();
        }
      );
  }

  async mostrarError() {
    const alert = await this.alertController.create({
        header: 'Error al iniciar sesión',
        message: 'Ha ocurrido un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.',
        buttons: ['Cerrar']
    });
    await alert.present();
}

  async ErrorCredenciales() {
    const alert = await this.alertController.create({
        header: 'Error al iniciar sesión',
        message: 'Las credenciales que ha suministrado son incorrectas',
        buttons: ['Cerrar']
    });
    await alert.present();
}

isEmailValid(email: string): boolean {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (email.trim() == "" || !regex.test(email)) {
    return false;
  } else {
    return true;
  }
}

isPasswordValid(password: string): boolean {
  if (password.trim().length < 4) {
    return false;
  } else {
    return true;
  }
}
}
