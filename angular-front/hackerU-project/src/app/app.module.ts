import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './routing';
import { HomeComponent } from './home/home.component';
import { HttpService } from './http.service';
import { TasksComponent } from './tasks/tasks.component';
import { RecycleBinComponent } from './tasks/recycle-bin/recycle-bin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UtilityService } from './Utilityservice';
import { TaskEditComponent } from './tasks/task-edit/task-edit.component';
import { AboutComponent } from './about/about.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomersComponent } from './customers/customers.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { SearchPipe } from './search.pipe';
import { EditCustomerComponent } from './customers/edit-customer/edit-customer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateContactComponent } from './contacts/create-contact/create-contact.component';
import { EditContactComponent } from './contacts/edit-contact/edit-contact.component';
import { AgePipe } from './age.pipe';
import { DatePipe } from '@angular/common';
import { ViewCustomerComponent } from './customers/view-customer/view-customer.component';
import { ViewContactComponent } from './contacts/view-contact/view-contact.component';




@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    RecycleBinComponent,
    TaskEditComponent,
    AboutComponent,
    CustomersComponent,
    ErrorPageComponent,
     CustomersComponent,
     CreateCustomerComponent,
     SearchPipe,
     AgePipe,
     EditCustomerComponent,
     ContactsComponent,
     CreateContactComponent,
     EditContactComponent,
     ViewCustomerComponent,
     ViewContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SocialLoginModule,
  ],
  providers: [
    HttpService,
    UtilityService,
    DatePipe,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '239902827985-bogb1atkvdrsgdh219lh7l2dqlt9ao2t.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
