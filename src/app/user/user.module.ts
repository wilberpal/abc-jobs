import { InterviewWebComponent } from './interview-web/interview-web.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SearchJobComponent } from './search-job/search-job.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { AccountComponent } from './account/account.component';
import { FloorMenuComponent } from './floor-menu/floor-menu.component';
import { ProyectComponent } from './proyect/proyect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProjectComponent } from './proyect/create-project/create-project.component';
import { TestComponent } from './test/test.component';
import { AbilityComponent } from './ability/ability.component';
import { ProjectDetailComponent } from './proyect/project-detail/project-detail.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { TestDetailsComponent } from './test/test-details/test-details.component';
import { PerformanceComponent } from './performance/performance.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalDataComponent } from './modal-data/modal-data.component';
import { HomeComponent } from './home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjecteWebComponent } from './projecte-web/projecte-web.component';
import { ApplicantsWebComponent } from './applicants-web/applicants-web.component';
import { SidebarComponent } from 'android/user/sidebar/sidebar.component';



@NgModule({
  declarations: [
    SearchJobComponent,
    VerifyAccountComponent,
    AccountComponent,
    FloorMenuComponent,
    ProyectComponent,
    CreateProjectComponent,
    TestComponent,
    AbilityComponent,
    ProjectDetailComponent,
    ApplicantsComponent,
    TestDetailsComponent,
    PerformanceComponent,
    ProfileComponent,
    ModalDataComponent,
    HomeComponent,
    ProjecteWebComponent,
    InterviewWebComponent,
    ApplicantsWebComponent,
    SidebarComponent


  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    IonicModule.forRoot(),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient]
      }
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserModule { }
