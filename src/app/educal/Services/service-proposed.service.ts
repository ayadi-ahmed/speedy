import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceProposedService {
  userURL:string="http://localhost:8081/api/services"
  constructor(private httpClient:HttpClient) {  }
  addService(obj: any){
    return this.httpClient.post(this.userURL+"/ajouterService",obj);
   }

   getAllServices(){
    return this.httpClient.get(this.userURL+"/");
   }

   getServiceById(id:any){
    return this.httpClient.get(`${this.userURL}/${id}`);
   }

   deleteService(id:any){
    return this.httpClient.delete(`${this.userURL}/${id}`);
   }

   updateService(id:any,newUser:any){
    return this.httpClient.put(`${this.userURL}/${id}`,newUser);
   }

  //  findall(){
  //   return this.httpClient.get("http://localhost:8081/api/particuliers")
  //  }
  
}
 