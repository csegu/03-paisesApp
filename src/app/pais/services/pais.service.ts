import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  //private apiUrlv2: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams()
    .set('fields','name,cca2,flags,capital,translations,population');
  }

  constructor( private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/translation/${termino}`;
    
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${termino}`;
    
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha(id: string): Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;
    
    return this.http.get<Country>(url);
  }

  getPaisesPorRegion(termino: string): Observable<Country[]> {
    
    const url = `${this.apiUrl}/region/${termino}`;
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

}
