import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courseData = [
    {
      id: 1,
      courseImage: "assets/img/services/g.svg",
      listImg: "assets/img/services/a.svg",
      title: "Electricité",
      // rating: "4.5",
      category: "Electricité",
      // price: "250.00",

    },
    {
      id: 2,
      courseImage: "assets/img/services/b.svg",
      listImg: "assets/img/services/b.svg",
      lesson: "72",
      title: "Installation éléctrique",
      rating: "4.0",
      teacherImg: "assets/img/course/teacher/teacher-2.jpg",
      teacherName: "Barry Tone",
      category: "Electricité",
      price: "32.00",
      oldPrice: "68.00",
      color: "sky-blue"
    },
    {
      id: 3,
      courseImage: "assets/img/services/c.svg",
      listImg: "assets/img/services/c.svg",
      lesson: "35",
      title: "Peinture intérieure",
      rating: "4.3",
      teacherImg: "assets/img/course/teacher/teacher-3.jpg",
      teacherName: "Samuel Serif",
      category: "Rénovation",
      price: "500.00",
      oldPrice: "650.00",
      color: "green"
    },
    {
      id: 4,
      courseImage: "assets/img/services/d.svg",
      listImg: "assets/img/services/d.svg",
      lesson: "60",
      title: "Réparation de fuites d'eau",
      rating: "3.5",
      teacherImg: "assets/img/course/teacher/teacher-4.jpg",
      teacherName: "Elon Gated",
      category: "Plomberie",
      price: "240.00",
      oldPrice: "3200.00",
      color: "blue"
    },
    {
      id: 5,
      courseImage: "assets/img/services/e.svg",
      listImg: "assets/img/services/e.svg",
      lesson: "28",
      title: "Pose de parquet",
      rating: "4.5",
      teacherImg: "assets/img/course/teacher/teacher-5.jpg",
      teacherName: "Eleanor Fant",
      category: "Rénovation",
      price: "300.00",
      oldPrice: "350.00",
      color: "orange"
    },
    {
      id: 6,
      courseImage: "assets/img/services/a.svg",
      listImg: "assets/img/services/a.svg",
      lesson: "38",
      title: "Réparation meuble",
      rating: "4.8",
      teacherImg: "assets/img/course/teacher/teacher-6.jpg",
      teacherName: "Brian Cumin",
      category: "Aménagement",
      price: "35.00",
      oldPrice: "46.00",
      color: "pink"
    },
    {
      id: 7,
      courseImage: "assets/img/course/course-7.jpg",
      listImg: "assets/img/course/list/course_list_7.jpeg",
      lesson: "26",
      title: "Build your media and Public presence",
      rating: "4.6",
      teacherImg: "assets/img/course/teacher/teacher-7.jpg",
      teacherName: "Pelican Steve",
      category: "Audio & Music",
      price: "46.00",
      oldPrice: "72.00",
      color: "orange"
    },
    {
      id: 8,
      courseImage: "assets/img/course/course-8.jpg",
      listImg: "assets/img/course/list/course_list_8.jpeg",
      lesson: "13",
      title: "Creative writing through Storytelling",
      rating: "4.4",
      teacherImg: "assets/img/course/teacher/teacher-8.jpg",
      teacherName: "Shahnewaz Sakil",
      category: "Mechanical",
      price: "52.00",
      oldPrice: "72.00",
      color: "pink"
    },
    {
      id: 9,
      courseImage: "assets/img/course/course-9.jpg",
      listImg: "assets/img/course/list/course_list_9.jpeg",
      lesson: "25",
      title: "Product Manager Learn the Skills & job.",
      rating: "4.2",
      teacherImg: "assets/img/course/teacher/teacher-9.jpg",
      teacherName: "Hilary Ouse",
      category: "Lifestyle",
      price: "15.00",
      oldPrice: "45.00",
      color: "blue-2"
    }
  ]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
