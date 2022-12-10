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
  //login!: FormGroup;
  email : string = "";
  password : string  = "";
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
   /*  this.login = this.formBuilder.group(
      {
        email: [""],
        password: [""]
      });
 */

  }

  logindata() {
    console.log({'email':this.email,'password' : this.password});
    this.userService.login({'email':this.email,'password' : this.password}).subscribe(res => {
      //  const user = res.find((a: any) => {
      //   return a.emailp === this.login.value.emailp && a.motdepassep === this.login.value.motdepassep
      // }); 

       if (this.email === res.emailp && this.password===res.motdepassep) {
        alert('you are logged in');
        this.router.navigate(["/dashboard"]);
      } else {
        alert('user not found');
        this.router.navigate(["sign-in"]);
       } 

      localStorage.setItem("speedyLoggedUser", JSON.stringify(res));

    })
  
  }
}
