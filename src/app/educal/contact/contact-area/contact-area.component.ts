import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceProposedService } from '../../Services/service-proposed.service';

@Component({
  selector: 'app-contact-area',
  templateUrl: './contact-area.component.html',
  styleUrls: ['./contact-area.component.scss']
})
export class ContactAreaComponent implements OnInit {
  addServiceForm!: FormGroup;
  constructor(private formBuilder:FormBuilder, private serviceProposedService: ServiceProposedService, private router:Router) {
   }

  ngOnInit(): void {
    this.addServiceForm=this.formBuilder.group(
      {
        nomService:[""],
        descriptionService:[""],
        prixService:[""],
        dureeService:[""],
        photoService:[""]
    });

   
  }

  addService(){

    console.log("ceci est un nouveau user:", this.addServiceForm.value);
    this.serviceProposedService.addService(this.addServiceForm.value).subscribe((data)=>{
      console.log("ceci est un client aprés connexion:", this.addServiceForm.value);
      this.router.navigate([""]);
    });

    } 
}