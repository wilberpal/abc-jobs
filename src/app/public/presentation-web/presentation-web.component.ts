import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentation-web',
  templateUrl: './presentation-web.component.html',
  styleUrls: ['./presentation-web.component.scss'],
})
export class PresentationWebComponent  implements OnInit {

  constructor(private translate: TranslateService,
    private router: Router) { }

  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
    const Mode = localStorage.getItem('DarkMode') || 'light';
    if(Mode === 'dark'){
      document.body.classList.toggle('dark', true);
    }
  }

  sendToUser() {
    this.router.navigate(['web/signup']);
  }

  sendToEnterprise() {
    this.router.navigate(['web/signup-enterprise']);
  }

}
