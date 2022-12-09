import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Particulier } from '../Model/Particulier';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL:string="http://localhost:8081/api"
  constructor(private httpClient:HttpClient) {  }
  signup(obj: any){
    return this.httpClient.post(this.userURL+"/AjouterParticulier",obj);
   }

   login(login : any){
    return this.httpClient.post<Particulier>(this.userURL+"/login", login);
    // return this.httpClient.post(this.userURL+"/login", login);

   }

   getAllUsers(){
return this.httpClient.get<Particulier[]>(this.userURL+"/particuliers");
  }
}
 