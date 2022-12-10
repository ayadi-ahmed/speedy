import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-header',
  templateUrl: './dash-header.component.html',
  styleUrls: ['./dash-header.component.scss']
})
export class DashHeaderComponent implements OnInit {
  user: any;
  session: any;
  constructor() { }

  ngOnInit(): void {
    let param = localStorage.getItem('speedyLoggedUser');
    this.session  = JSON.parse(param!);
    console.log(this.session);
  }

}
