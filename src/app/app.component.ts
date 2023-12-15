import { Component } from '@angular/core';
import { My2Service } from './my2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My Service2';
  //iniettiamo la classe nel costruttore
  constructor(private myService: My2Service){

    console.log('----- AppComponent');
     // My2Service, veriichiamo che esista attraverso la console, funziona vuol dire che ci siamo. Lo useremo maggiormente al di fuori del costruttore ma adesso vediamo da qui per sveltezza.
     console.log(this.myService.proprietaMyService);
     this.myService.metodoMyService('iniezione in AppComponent riuscita');
  }
}
