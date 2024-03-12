import { HttpClient, HttpErrorResponse, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private backendUrl = "http://localhost:8080";

  private urlDelete = "http://localhost:8080/users";

  constructor(private http: HttpClient) {}

  findAllUsers(searchTerm: string): Observable<any> {
    return this.http.get(`${this.backendUrl}/users?searchTerm=${searchTerm}`);
  }

  //Create
  createUser(user: any): Observable<any> {
    return this.http.post(`${this.backendUrl}/users`, user);
  }

  //Read
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.backendUrl}/users`);
  }

  //Update
  updateUser(id: number, formData: FormData): Observable<FormData>{
    const url = `${this.backendUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  //Delete
  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.urlDelete}/${id}`);
  }
}
