import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEnterpriseComponent } from './create-enterprise/create-enterprise.component';



const routes: Routes = [
  {
    path: '',
    component: PresentationComponent,
  },


  {
    path: 'login',
    component: LoginComponent,
  },


  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },

  {
    path: 'signup',
    component: CreateAccountComponent,
  },
  {
    path: 'signup-enterprise',
    component: CreateEnterpriseComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
