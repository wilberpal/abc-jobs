import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrls: ['./accesibility.component.scss'],
})
export class AccesibilityComponent  implements OnInit {
  languageChoose:string = ''
  constructor(private modalCtrl: ModalController,
    private translate:TranslateService,
    private router: Router,
    private route: ActivatedRoute) {
      const lang = localStorage.getItem('appLang') || 'es';
      this.translate.use(lang);
      this.languageChoose === lang
   }

  ngOnInit() {

  }

  changeLang() {
    console.log("11111111111111111111")
    const lang = localStorage.getItem('appLang') || 'es';
    console.log("lang", lang)
    console.log("Actual", this.languageChoose)
    if(lang === 'es' && this.languageChoose === 'en'){
      this.translate.use('en');
      localStorage.setItem('appLang', 'en');
      console.log("22222222222222222222222")
    }
    if(lang === 'en' && this.languageChoose === 'es'){
      console.log("33333333333333333333")
      this.translate.use('es');
      localStorage.setItem('appLang', 'es');
    }
  }

  closeModal() {
    this.modalCtrl.dismiss();
    location.reload();
  }

  refreshComponent() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([this.route.url]);
    });
  }

  setDarkMode(isDark: boolean) {
    document.body.classList.toggle('dark', isDark);
  }

}

