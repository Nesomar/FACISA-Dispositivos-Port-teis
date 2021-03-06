import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: Http) {}

  getUsers (){
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(res => res.json());
  }

}
