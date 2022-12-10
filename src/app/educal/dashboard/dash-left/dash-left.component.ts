import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-left',
  templateUrl: './dash-left.component.html',
  styleUrls: ['./dash-left.component.scss']
})
export class DashLeftComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logout(){
    localStorage.clear();
    this.router.navigate([""]);

  }

}
