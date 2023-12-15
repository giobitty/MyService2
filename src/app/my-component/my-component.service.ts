import { Injectable } from '@angular/core';

@Injectable(
  //{providedIn: 'root'} cosi da non essere disponibile a livello globale
)
export class MyComponentService {

 // Proprietà
 public proprietaMyComponentService = 'Proprietà MyComponentService ';
        
 // Costruttore
 constructor() {
     console.log('Costruttore MyComponentService');        
 }
 // Metodo
 public metodoMyComponentService(stringa?: string) {        
     console.log('Metodo MyComponentService ' + stringa);
 }
}
