import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
// import Swiper core and required modules
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { ServiceProposedService } from '../../Services/service-proposed.service';

// install Swiper modules
SwiperCore.use([ Pagination, Autoplay])

@Component({
  selector: 'app-course-details-area',
  templateUrl: './course-details-area.component.html',
  styleUrls: ['./course-details-area.component.scss']
})
export class CourseDetailsAreaComponent implements OnInit {
  service: any;
id:any;
  servicesService:any;
  activatedRoute:any;
  constructor(servicesService:ServiceProposedService, activatedRoute: ActivatedRoute) { 
    this.servicesService=servicesService;
    this.activatedRoute=activatedRoute;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paraMap.get("id");
    console.log("id is",this.id)
  return this.servicesService.getServiceById(this.id).subscribe((data:any)=> {
      this.service = data;
      console.log("services are",this.service.idService);
    }
    
  );
  }
}
