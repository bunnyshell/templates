import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from './books';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Books[]>(`${this.apiUrl}/books`);
  }

  getById(id: number) {
    return this.http.get<Books>(`${this.apiUrl}/books/${id}`);
  }

  create(payload: Books) {
    return this.http.post<Books>(`${this.apiUrl}/books`, payload);
  }

  update(payload:Books){
    return this.http.put(`${this.apiUrl}/books/${payload.id}`, payload);
  }

  remove(id:number){
    return this.http.delete<Books>(`${this.apiUrl}/books/${id}`);
 }
}
