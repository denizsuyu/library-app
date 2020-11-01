import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  public GetBooks() {
    return this.http.get("https://raw.githubusercontent.com/denizsuyu/library/main/library.json");
  }
}
