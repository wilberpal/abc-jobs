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
  modeScreen:string = ''
  constructor(private modalCtrl: ModalController,
    private translate:TranslateService,
    private router: Router,
    private route: ActivatedRoute) {

   }

  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    const Mode = localStorage.getItem('DarkMode') || 'light';
    this.modeScreen = Mode;
    if(Mode === 'dark'){
      document.body.classList.toggle('dark', true);
    }
    this.languageChoose = lang
      this.translate.use(lang);
  }

  changeLang() {
    const lang = localStorage.getItem('appLang') || 'es';
    console.log("lang", lang)
    console.log("Actual", this.languageChoose)
    if(lang === 'es' && this.languageChoose === 'en'){
      this.translate.use('en');
      localStorage.setItem('appLang', 'en');
    }
    if(lang === 'en' && this.languageChoose === 'es'){
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
    if(isDark == true){
      localStorage.setItem('DarkMode', 'dark');
      this.modeScreen = 'dark'
    }else{
      localStorage.setItem('DarkMode', 'light');
      this.modeScreen = 'light'
    }
  }

}

