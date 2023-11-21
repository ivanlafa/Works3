import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './vista 1/navbar/navbar.component';
import { HeaderComponent } from './vista 1/header/header.component';
import { FirstSectionComponent } from './vista 1/first-section/first-section.component';
import { SecondSectionComponent } from './vista 1/second-section/second-section.component';
import { ThirdSectionComponent } from './vista 1/third-section/third-section.component';
import { FourthSectionComponent } from './vista 1/fourth-section/fourth-section.component';
import { FiveSectionComponent } from './vista 1/five-section/five-section.component';
import { FooterComponent } from './vista 1/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FirstSectionComponent,
    SecondSectionComponent,
    ThirdSectionComponent,
    FourthSectionComponent,
    FiveSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
