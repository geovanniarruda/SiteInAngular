import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

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
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GamesComponent,
    ConsolesComponent,
    ComputadoresComponent,
    CelularesComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
