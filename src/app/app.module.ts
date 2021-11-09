import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { GamesComponent } from './views/games/games.component';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { ComputadoresComponent } from './views/computadores/computadores.component';
import { CelularesComponent } from './views/celulares/celulares.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GamesComponent,
    ConsolesComponent,
    ComputadoresComponent,
    CelularesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
