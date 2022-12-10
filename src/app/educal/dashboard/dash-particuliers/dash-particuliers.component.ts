import { Component, OnInit } from '@angular/core';
import { Particulier } from '../../Model/Particulier';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-dash-particuliers',
  templateUrl: './dash-particuliers.component.html',
  styleUrls: ['./dash-particuliers.component.scss']
})
export class DashParticuliersComponent implements OnInit {
particulierList:any[]=[] ;
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users)=> {
      console.log("users are",users);
      this.particulierList = users;
     
    }
    
  );
  }

}
