import { Injectable } from '@angular/core';
/*cos e' injectable? 
una classe iniettabile , uno strumento, che fa parte di un design pattern specifico che tenta di semplificare 
la gestione della dipendenza delle classi.
puo essere resa disponibile tramite un processo di iniezione 
l unico metadato e' providedIn => indica a che livello di accessibilita poniamo il nostro service
*/

//quello che vediamo qui e' un approccio "recente", noi useremo un approccio classico quindi commentiamo il providedIn che e' un oggetto json.
@Injectable(
  //{providedIn: 'root'}

  )

//classe vera e propria con costruttore in cui andremo a scrivere le proprieta' che ci servono e i 
//vari metodi e questi saranno gli elementi messi a disposizione mediante l iniezione. e' possibile che un service utilizzi un altro service
// in console vedremo l errore NullInjectorError quando non avremo effettivamente connesso attraverso l injection un service all app 
export class My2Service {
  constructor() {
    console.log('Constructor MyService');        
  }
  // Proprietà
  public proprietaMyService = 'Proprietà MyService';
  // Metodi ricordiamo che ?= rende la variabile opzionale.
  public metodoMyService(stringa?: string) {
    console.log('Metodo MyService ' + stringa);
  } 
}
