import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FanPageComponent } from './components/fan-page/fan-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterProfileComponent } from './components/character-profile/character-profile.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ReactiveDrivenFormComponent } from './components/reactive-driven-form/reactive-driven-form.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "fans",
    component: FanPageComponent
  },
  {
    path: "characters",
    component: CharactersComponent
  },
  {
    path: "reactive-form",
    component: ReactiveDrivenFormComponent
  },
  {
    path: "characters/:id",
    component: CharacterProfileComponent
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
