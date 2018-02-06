import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarTexto } from './directive/directive.resaltar';
import { EscuchadorClick } from './directive/click';
import {Routes} from '@angular/router';
const appRouter: Routes = [
  {path: 'lugares', component: AppComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ResaltarTexto,
    EscuchadorClick
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
