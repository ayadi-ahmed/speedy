import { Component, OnInit } from '@angular/core';
import { ServiceProposedService } from '../../Services/service-proposed.service';

@Component({
  selector: 'app-dash-services',
  templateUrl: './dash-services.component.html',
  styleUrls: ['./dash-services.component.scss']
})
export class DashServicesComponent implements OnInit {
  serviceList:any ;
  constructor(private servicesService : ServiceProposedService) { }

  ngOnInit(): void {
    this.servicesService.getAllServices().subscribe((services)=> {
      console.log("services are",services);
      this.serviceList = services;
     
    }
    
  );
  }

}
