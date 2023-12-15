import { Component } from '@angular/core';

import { MyComponentService } from './my-component.service';
import { My2Service } from '../my2.service';

@Component({
  //ricorda questo e' un oggetto JSON

  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
  //dichiara la service nella lista dei providers del componente 
  providers: [MyComponentService]
})

export class MyComponentComponent {
  title = 'My Component';
  
  //inietta le istanze del service
  constructor(private myService: My2Service,
    private myComponentService: MyComponentService)
    { }
  
    //ciclo di vita dei component-> cio che succede nell arco della vita del componente, inizializzazione e distruzione sono le fasi piu importanti
    /* Ogni ciclo e' rappresentato da diverse fasi,in angular il ciclo di vita inizia nel costruttore dopodiche ngOnInit e' l atto di inizializzazione (quando viene lanciata l applicazione)
    esiste anche ngOnDestroy che rappresenta il momento in cui il componente viene distrutto (chiusura della pagina ad esempio) 
    */
  ngOnInit(){
    
    //Membri di MyComponentService
      console.log('----- My Component');
      console.log(this.myComponentService.proprietaMyComponentService + 'in MyComponent');
      this.myComponentService.metodoMyComponentService('in MyComponent');
  }

}
