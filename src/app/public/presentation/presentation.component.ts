import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {
  presentation={
    first:"assets/image/image (9).png",
    second:"assets/image/Group 32.png",
    third:"assets/image/onb3 (1).png",
    logo:"assets/image/logo.png",
  }
  step: number;
  modeScreen:string=""
  constructor(private platform: Platform,
    private router: Router,
    private translate: TranslateService,
    )
     {
    this.step = 0;
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

  next() {
    if (this.step >= 0 && this.step < 4) {
      this.step += 1;
    }
  }

  back() {
    if (this.step > 0 && this.step < 4) {
      this.step -= 1;
    }
  }

  sendToJob() {
    this.router.navigate(['/user']);
  }

  sendToEnterprise() {
    this.router.navigate(['/signup-enterprise']);
  }

}
