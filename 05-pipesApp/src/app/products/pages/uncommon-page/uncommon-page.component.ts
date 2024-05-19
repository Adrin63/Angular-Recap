import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Adrin';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male':'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name ='Melisa';
    this.gender = 'female';
  }

  //i18nPlural
  public clients: string[] = ['Pancho', 'Nat', 'Diego', 'Victor', 'Carlos Alberto']
  public clientsMap = {
    '=0': 'No tenemos ningún cliente esperando.',
    '=1': 'Tenemos un cliente esperando.',
    '=2': 'Tenemos dos.',
    'other': 'Tenemos # clientes esperando.',
  }

  deleteClient() : void{
    this.clients.shift();
  }

  public person = {
    name: 'Adrin',
    age: '22',
    address: 'Barcelona, España'
  }

  public myObservableTimer : Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap:', value))
  )

  public promiseValue = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  })
}
