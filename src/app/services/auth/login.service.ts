import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private env = environment
  constructor(private http: HttpClient) {
  }

  private handleError(error: any): Observable<never> {
    let mensajeError = '';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente o de la red.
      mensajeError = `Error: ${error.error.message}`;
    } else {
      // Errores retornados por el servidor.
      mensajeError = `Error Código: ${error.status}\nMensaje: ${error.message}`;
    }
    console.error(mensajeError);
    return throwError(mensajeError);
  }


  login(data: any) {
    let json = JSON.parse('"json"')
    let headers = this.getHeader();
    const options =  {responseType: json, headers: headers};
    return this.http.post(`${this.env.URI_2}/${this.env.argumentUser}/${this.env.argumentSignUp}/${this.env.argumentLogin}`, data, options).pipe(
      catchError(this.handleError),
      map((response: any) => response)
    )
  }

  Signup(data: any) {
    let json = JSON.parse('"json"')
    let headers = this.getHeader();
    const options =  {responseType: json, headers: headers};
    return this.http.post(`${this.env.URI_2}/${this.env.argumentUser}/${this.env.argumentSignUp}`, data, options).pipe(
      catchError(this.handleError),
      map((response: any) => response)
    )
  }

  protected getHeader(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Access-Control-Allow-Origin', '*');
    headers = headers.set('Accept', '*/*');
    return headers
  }


}



