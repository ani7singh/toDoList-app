import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
   // data: { title: 'Book List' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    //  data: { title: 'Sign Up' }
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ConfirmEqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
