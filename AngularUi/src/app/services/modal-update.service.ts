import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";
import { User } from "../interfaces/user-interface";

@Injectable({
  providedIn: 'root'
})
export class ModalUpdateService {
  private backendUrl = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  updateUser(updatedUser: User): Observable<any> {
    const url = `${this.backendUrl}/users/${updatedUser.id}`;
    return this.http.put(url, updatedUser).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error("Erro na solicitação de atualização:", error);
        return throwError(error);
      })
    );
  }
}
