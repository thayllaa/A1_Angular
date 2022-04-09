import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThayllaComponent } from './thaylla/thaylla.component';
import { ThayllaListaComponent } from './thaylla-lista/thaylla-lista.component';
import { ThayllaDetalhesComponent } from './thaylla-detalhes/thaylla-detalhes.component';
import { ThayllaDisciplinasService } from './thaylla-disciplinas.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: 'thaylla', component: ThayllaComponent},
      {path: 'lista', component: ThayllaListaComponent},
      {path: 'detalhes/:index', component: ThayllaDetalhesComponent}
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    ThayllaComponent,
    ThayllaListaComponent,
    ThayllaDetalhesComponent 
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    ThayllaDisciplinasService
  ]
})
export class AppModule { }
