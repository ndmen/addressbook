import { Injectable } from '@angular/core';
import { Address } from './address';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  endpoint: string = 'http://localhost:3000';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}
  // New Address
  NewAddress(data: Address): Observable<any> {
    let API_URL = `${this.endpoint}/addresses`;
    return this.http.post(API_URL, data).pipe(catchError(this.errorMgmt));
  }
  // Get all addresses
  GetAddresses() {
    return this.http.get(`${this.endpoint}/addresses`);
  }
  // Get address
  GetAddress(id : string): Observable<any> {
    let API_URL = `${this.endpoint}/addresses/${id}`;
    return this.http.get(API_URL, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {};
      }),
      catchError(this.errorMgmt)
    );
  }
  // Update address
  UpdateAddress(id: string, data: any): Observable<any> {
    let API_URL = `${this.endpoint}/addresses/${id}`;
    return this.http
      .patch(API_URL, data, { headers: this.headers })
      .pipe(catchError(this.errorMgmt));
  }
  // Delete address
  DeleteAddress(id : string): Observable<any> {
    var API_URL = `${this.endpoint}/addresses/${id}`;
    return this.http.delete(API_URL).pipe(catchError(this.errorMgmt));
  }
  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}