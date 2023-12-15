import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { My2Service } from './my2.service';
import { MyComponentComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [

    //versione classica dell iniezione del service da qui utilizziamo un iniettore globale, se lo forniamo in un componente vorra dire che lo staremo iniettando solo in quello, 
    My2Service,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
