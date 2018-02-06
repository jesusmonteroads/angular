import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContadorClick } from './directives/contar.click';


@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContadorClick
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBp-JwJCvdAjyPubIeFhTMJ1YsEwZVAIpA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
