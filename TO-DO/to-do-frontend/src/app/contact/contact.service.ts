import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/todoapplication/submitContact';

  constructor(private http: HttpClient) { }

  submitContact(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }
}
