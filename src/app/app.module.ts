import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { LeftSideComponent } from './left-side/left-side.component';
import { RightSideComponent } from './right-side/right-side.component';

import { AuthModule } from './../auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LeftSideComponent,
    RightSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
