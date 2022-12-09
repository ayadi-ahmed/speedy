import { Component, OnInit } from '@angular/core';
import { Particulier } from '../../Model/Particulier';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-dash-particuliers',
  templateUrl: './dash-particuliers.component.html',
  styleUrls: ['./dash-particuliers.component.scss']
})
export class DashParticuliersComponent implements OnInit {
services:any ;
// varr:any;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((data)=> {
      this.services = data;

      // data.map
      console.log("services",this.services[0].nomp);
     
    }
    
  );
  }

}
