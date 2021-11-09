import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularesComponent } from './views/celulares/celulares.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { GamesComponent } from './views/games/games.component';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "games", component: GamesComponent},
  {path: "consoles", component: ConsolesComponent},
  {path: "computadores", component: ComputadoresComponent},
  {path: "celulares", component: CelularesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
