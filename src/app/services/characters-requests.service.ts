import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CharacterInterface } from 'src/app/interfaces/character-interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersRequestsService {

  private readonly API_URL = "https://ih-crud-api.herokuapp.com";
  characterList: any = [];

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<CharacterInterface[]> {
    return this.http.get<CharacterInterface[]>(`${this.API_URL}/characters`);
  }

  getCharacter(id: number): Observable<CharacterInterface[]> {
    return this.http.get<CharacterInterface[]>(`${this.API_URL}/characters/${id}`);
  }

  postCharacter(body: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/characters`, body)
  }

  putCharacter(id: number, body: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/characters/${id}`, body)
  }

  deleteCharacter(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/characters/${id}`)
  }
}
