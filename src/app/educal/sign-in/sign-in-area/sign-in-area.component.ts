import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-sign-in-area',
  templateUrl: './sign-in-area.component.html',
  styleUrls: ['./sign-in-area.component.scss']
})
export class SignInAreaComponent implements OnInit {
  login!: FormGroup;
  constructor(private formBuilder:FormBuilder, private userService: UserService, private router:Router) {
   }

  ngOnInit(): void {
    this.login=this.formBuilder.group(
      {
     emailp:[""],
     motdepassep:[""]
    });

   
  }

  logindata(login: FormGroup){
    this.userService.login().subscribe(res=>{
      const user = res.find((a:any)=>{
      return a.emailp===this.login.value.emailp && a.motdepassep===this.login.value.motdepassep
    });

    if(user){
      alert('you are logged in');
      this.login.reset();
      this.router.navigate([""]);
    }else{
      alert('user not found');
      this.router.navigate(["sign-in"]);

    }
    });
    var userJson =  JSON.stringify(this.login.value);
    localStorage.setItem(this.login.value, userJson);
    console.log("USER ADDED",userJson);
    } 
}
