import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputBarComponent } from './input-bar/input-bar.component';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { PokeServiceService } from './poke-service.service';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokeIdService } from './poke-id.service';



@NgModule({
  declarations: [
    AppComponent,
    InputBarComponent,
    FilterPokemonPipePipe,
    PokemonDetailsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
    PokeServiceService,
    PokeIdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }