import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-dash-profil',
  templateUrl: './dash-profil.component.html',
  styleUrls: ['./dash-profil.component.scss']
})
export class DashProfilComponent implements OnInit {
session1:any;
session:any;
  nomp: any;
  prenomp: any;

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    let param = localStorage.getItem('speedyLoggedUser');
    this.session1  = JSON.parse(param!);
    const idUser=this.session1.id;

    this.userService.getUserById(idUser).subscribe((data)=>{
      this.session = data;
      console.log("this is the user:",this.session1);
    });
  }

  updateUser(){
    console.log({'nomp':this.nomp,'prenomp' : this.prenomp});
    this.userService.login({'email':this.nomp,'password' : this.prenomp}).subscribe(res => {
      console.log(this.nomp);
    });

}
}
