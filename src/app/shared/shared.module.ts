import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextComponent } from './button/next/next.component';
import { BackComponent } from './button/back/back.component';
import { IonicModule } from '@ionic/angular';
import { BoxComponent } from './button/box/box.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { JobCardComponent } from './job-card/job-card.component';
import { RouterModule } from '@angular/router';
import { CardFileComponent } from './card-file/card-file.component';
import { CardSkillComponent } from './card-skill/card-skill.component';
import { SuccessCreationComponent } from './success-creation/success-creation.component';
import { AccesibilityComponent } from './accesibility/accesibility.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    NextComponent,
    BackComponent
    ,BoxComponent,
    TopNavComponent,
    JobCardComponent,
    CardFileComponent,
    CardSkillComponent,
    SuccessCreationComponent,
    AccesibilityComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports:[
    NextComponent,
    BackComponent,
    BoxComponent,
    TopNavComponent,
    JobCardComponent,
    CardFileComponent,
    CardSkillComponent,
    SuccessCreationComponent,
    AccesibilityComponent
  ]
})
export class SharedModule { }
