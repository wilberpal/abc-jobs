import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEnterpriseComponent } from './create-enterprise/create-enterprise.component';
import { PresentationWebComponent } from './presentation-web/presentation-web.component';
import { ForgotPasswordWebComponent } from './forgot-password-web/forgot-password-web.component';
import { LoginWebComponent } from './login-web/login-web.component';
import { CreateAccountWebComponent } from './create-account-web/create-account-web.component';
import { CreateEnterpriseWebComponent } from './create-enterprise-web/create-enterprise-web.component';


const routes: Routes = [
  {
    path: '',
    component: PresentationComponent,
  },
  {
    path: 'index',
    component: PresentationWebComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'web/login',
    component: LoginWebComponent,
  },

  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'web/forgot-password',
    component: ForgotPasswordWebComponent,
  },
  {
    path: 'signup',
    component: CreateAccountComponent,
  },
  {
    path: 'signup-enterprise',
    component: CreateEnterpriseComponent,
  },
  {
    path: 'web/signup',
    component: CreateAccountWebComponent,
  },
  {
    path: 'web/signup-enterprise',
    component: CreateEnterpriseWebComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {}
