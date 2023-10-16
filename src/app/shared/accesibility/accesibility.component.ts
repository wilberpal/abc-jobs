import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-accesibility',
  templateUrl: './accesibility.component.html',
  styleUrls: ['./accesibility.component.scss'],
})
export class AccesibilityComponent  implements OnInit {
  languageChoose: string;

  constructor(private modalCtrl: ModalController,
    private translate:TranslateService) {
      translate.setDefaultLang('es')
    this.languageChoose = "spanish"
   }


   Chooselanguage(){
    if(this.languageChoose != "spanish"){
      this.translate.use('en')
    }else{
      this.translate.use('es')
    }

   }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  setDarkMode(isDark: boolean) {
    document.body.classList.toggle('dark', isDark);
  }

}

