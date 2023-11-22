import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  private urlApi="https://dog.ceo/api/breeds/list/all";

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get(this.urlApi);
  }
}
