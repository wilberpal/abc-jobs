import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchJobComponent } from './search-job/search-job.component';
import { VerifyAccountComponent } from './verify-account/verify-account.component';
import { AccountComponent } from './account/account.component';
import { ProyectComponent } from './proyect/proyect.component';
import { ProjectDetailComponent } from './proyect/project-detail/project-detail.component';
import { TestComponent } from './test/test.component';
import { AbilityComponent } from './ability/ability.component';
import { ApplicantsComponent } from './applicants/applicants.component';
import { TestDetailsComponent } from './test/test-details/test-details.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProjecteWebComponent } from './projecte-web/projecte-web.component';
import { InterviewWebComponent } from './interview-web/interview-web.component';
import { ApplicantsWebComponent } from './applicants-web/applicants-web.component';


const routes: Routes = [
  {
    path: '',
    component: SearchJobComponent,
  },
  {
    path: 'verify-account',
    component: VerifyAccountComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'project',
    component: ProyectComponent,
  },
  {
    path: 'web/projects',
    component: ProjecteWebComponent,
  },
  {
    path: 'project/detail',
    component: ProjectDetailComponent,
  },
  {
    path: 'interview',
    component: TestComponent,
  },
  {
    path: 'web/interview',
    component: InterviewWebComponent,
  },
  {
    path: 'ability',
    component: AbilityComponent,
  },
  {
    path: 'applicant',
    component: ApplicantsComponent,
  },
  {
    path: 'web/applicant',
    component: ApplicantsWebComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'interview/:id',
    component: TestDetailsComponent,
  },
  {
    path: 'index',
    component: HomeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
