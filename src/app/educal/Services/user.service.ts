import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userURL:string="http://localhost:3000/users"
  constructor(private httpClient:HttpClient) {  }
  signup(obj: any){
    return this.httpClient.post(this.userURL,obj);
   }

   login(){
    return this.httpClient.get<any>(this.userURL);
   }
}
 