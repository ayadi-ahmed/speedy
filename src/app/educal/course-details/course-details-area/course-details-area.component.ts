import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { ServiceParticulier } from '../../Model/ServiceParticulier';
import { ServiceProposedService } from '../../Services/service-proposed.service';

// install Swiper modules
SwiperCore.use([ Pagination, Autoplay])

@Component({
  selector: 'app-course-details-area',
  templateUrl: './course-details-area.component.html',
  styleUrls: ['./course-details-area.component.scss']
})
export class CourseDetailsAreaComponent implements OnInit {
  service: ServiceParticulier = new ServiceParticulier;
  id:any;

  constructor(private servicesService:ServiceProposedService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("id is",this.id)
    return this.servicesService.getServiceById(this.id).subscribe((data)=> {
      this.service = data;
      console.log("services are",this.service.prixService);
    }
    
  );
  }
}
