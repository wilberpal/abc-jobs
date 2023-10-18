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
  step: number;
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
    if (this.platform.is('desktop')) {
      this.router.navigate(['/index']);
   } else {
      this.router.navigate(['/']);
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
