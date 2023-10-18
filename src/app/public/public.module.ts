import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { IonicModule } from '@ionic/angular';
import { PresentationComponent } from './presentation/presentation.component';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateEnterpriseComponent } from './create-enterprise/create-enterprise.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PresentationWebComponent } from './presentation-web/presentation-web.component';
import { LoginWebComponent } from './login-web/login-web.component';
import { ForgotPasswordWebComponent } from './forgot-password-web/forgot-password-web.component';
import { CreateAccountWebComponent } from './create-account-web/create-account-web.component';
import { CreateEnterpriseWebComponent } from './create-enterprise-web/create-enterprise-web.component';


@NgModule({
  declarations: [
    PresentationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    CreateAccountComponent,
    CreateEnterpriseComponent,
    PresentationWebComponent,
    LoginWebComponent,
    ForgotPasswordWebComponent,
    CreateAccountWebComponent,
    CreateEnterpriseWebComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    RouterModule,
    IonicModule.forRoot(),
    SharedModule,
    HttpClientModule,
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
  providers: [{ provide: LOCALE_ID, useValue: 'es' },],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicModule { }
