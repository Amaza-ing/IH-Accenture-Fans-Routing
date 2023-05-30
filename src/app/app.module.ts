import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FanPageComponent } from './components/fan-page/fan-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FanItemComponent } from './components/fan-item/fan-item.component';
import { RandomUserService } from './services/random-user.service';
import { CharactersComponent } from './components/characters/characters.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterProfileComponent } from './components/character-profile/character-profile.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReactiveDrivenFormComponent } from './components/reactive-driven-form/reactive-driven-form.component';
import { CustomValidatorComponent } from './components/custom-validator/custom-validator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { CoursesComponent } from './components/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    FanPageComponent,
    FanItemComponent,
    CharactersComponent,
    HomeComponent,
    NavbarComponent,
    CharacterProfileComponent,
    ErrorPageComponent,
    ReactiveDrivenFormComponent,
    CustomValidatorComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [RandomUserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
