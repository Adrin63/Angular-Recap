import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutPageComponent } from './auth/pages/layout-page/layout-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutPageComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
