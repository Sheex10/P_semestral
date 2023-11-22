import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ApiserviceService {

  private urlApi="https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.urlApi);
  }

  getRazas(): Observable<any> {
    const apiKey = '' ;
    const url = '';
    return this.http.get(url);
  }


}
