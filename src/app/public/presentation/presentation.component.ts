import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent  implements OnInit {
  step:number;
  constructor(private router: Router,
    private translate:TranslateService) {
      translate.setDefaultLang('es')
      translate.use('es')
    this.step = 0;
   }

  ngOnInit() {
  }

  next(){
    if(this.step >= 0 && this.step < 4){
      this.step += 1;
    }
  }

  back(){
    if(this.step > 0 && this.step < 4){
      this.step -= 1;
    }
  }

  sendToJob(){
    this.router.navigate(['/user']);
  }

  sendToEnterprise(){
    this.router.navigate(['/signup-enterprise']);
  }

}
