import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-sign-up-area',
  templateUrl: './sign-up-area.component.html',
  styleUrls: ['./sign-up-area.component.scss']
})
export class SignUpAreaComponent implements OnInit {
 user:any={};
  signupForm!: FormGroup;
  constructor(private formBuilder:FormBuilder, private userService: UserService, private router:Router) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group(
      {
     nomp:[""],
     emailp:[""],
     motdepassep:[""],
     confirmPassword:[""]
    });
  }
  signup(){
    console.log("ceci est un nouveau user:", this.user);
    this.userService.signup(this.user).subscribe((data)=>{
      console.log("ceci est un client aprés connexion:", this.user);
      this.router.navigate([""]);
    });

    } 
  }
