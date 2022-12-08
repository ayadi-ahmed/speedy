import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceProposedService } from '../../Services/service-proposed.service';

@Component({
  selector: 'app-course-sidebar-area',
  templateUrl: './course-sidebar-area.component.html',
  styleUrls: ['./course-sidebar-area.component.scss']
})
export class CourseSidebarAreaComponent implements OnInit {
  services: any;
  servicesService:any;
  constructor(servicesService:ServiceProposedService) { 
    this.servicesService=servicesService;
  }

  ngOnInit():void {
  this.servicesService.getAllServices().subscribe((data:any)=> {
      this.services = data;
      console.log(data);
    }
    
  );
  }
 
  // courseData = [
  //   {
  //     id: 1,
  //     courseImage: "assets/img/services/g.svg",
  //     listImg: "assets/img/services/a.svg",
  //     title: "Installation d'un radiateur électrique ",
  //     rating: "4.5",
  //     category: "Electricité",
  //     price: "250.00",
  //     oldPrice: "330.00"
  //   },
  //   {
  //     id: 2,
  //     courseImage: "assets/img/services/b.svg",
  //     listImg: "assets/img/services/b.svg",
  //     lesson: "72",
  //     title: "Installation éléctrique",
  //     rating: "4.0",
  //     teacherImg: "assets/img/course/teacher/teacher-2.jpg",
  //     teacherName: "Barry Tone",
  //     category: "Electricité",
  //     price: "32.00",
  //     oldPrice: "68.00",
  //     color: "sky-blue"
  //   },
  //   {
  //     id: 3,
  //     courseImage: "assets/img/services/c.svg",
  //     listImg: "assets/img/services/c.svg",
  //     lesson: "35",
  //     title: "Peinture intérieure",
  //     rating: "4.3",
  //     teacherImg: "assets/img/course/teacher/teacher-3.jpg",
  //     teacherName: "Samuel Serif",
  //     category: "Rénovation",
  //     price: "500.00",
  //     oldPrice: "650.00",
  //     color: "green"
  //   },
  //   {
  //     id: 4,
  //     courseImage: "assets/img/services/d.svg",
  //     listImg: "assets/img/services/d.svg",
  //     lesson: "60",
  //     title: "Réparation de fuites d'eau",
  //     rating: "3.5",
  //     teacherImg: "assets/img/course/teacher/teacher-4.jpg",
  //     teacherName: "Elon Gated",
  //     category: "Plomberie",
  //     price: "240.00",
  //     oldPrice: "3200.00",
  //     color: "blue"
  //   },
  //   {
  //     id: 5,
  //     courseImage: "assets/img/services/e.svg",
  //     listImg: "assets/img/services/e.svg",
  //     lesson: "28",
  //     title: "Pose de parquet",
  //     rating: "4.5",
  //     teacherImg: "assets/img/course/teacher/teacher-5.jpg",
  //     teacherName: "Eleanor Fant",
  //     category: "Rénovation",
  //     price: "300.00",
  //     oldPrice: "350.00",
  //     color: "orange"
  //   },
  //   {
  //     id: 6,
  //     courseImage: "assets/img/services/a.svg",
  //     listImg: "assets/img/services/a.svg",
  //     lesson: "38",
  //     title: "Réparation meuble",
  //     rating: "4.8",
  //     teacherImg: "assets/img/course/teacher/teacher-6.jpg",
  //     teacherName: "Brian Cumin",
  //     category: "Aménagement",
  //     price: "35.00",
  //     oldPrice: "46.00",
  //     color: "pink"
  //   }
    
    
    
  // ]



}
