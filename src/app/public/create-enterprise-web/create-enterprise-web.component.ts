import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-enterprise-web',
  templateUrl: './create-enterprise-web.component.html',
  styleUrls: ['./create-enterprise-web.component.scss'],
})
export class CreateEnterpriseWebComponent  implements OnInit {

  constructor(private router: Router,
    private translate: TranslateService) { }

  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
    const Mode = localStorage.getItem('DarkMode') || 'light';
    if(Mode === 'dark'){
      document.body.classList.toggle('dark', true);
    }
  }

  sendToLogin() {
    this.router.navigate(['/web/login']);
  }

  sendToProjects() {
    this.router.navigate(['/user/web/projects']);
  }

  backPage() {
    window.history.back();
  }

}
