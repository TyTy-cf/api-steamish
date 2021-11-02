import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamesIndexComponent} from "./games-index/games-index.component";

const routes: Routes = [
  { path: 'games', component: GamesIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
