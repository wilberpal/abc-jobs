import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password-web',
  templateUrl: './forgot-password-web.component.html',
  styleUrls: ['./forgot-password-web.component.scss'],
})
export class ForgotPasswordWebComponent  implements OnInit {

  constructor(private router: Router,
    private translate: TranslateService) { }

  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
  }

  backPage() {
    window.history.back();
  }

}
