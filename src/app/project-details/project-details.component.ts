import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(
    private apiservice:ApiService,
    private route:Router
     
    ) { }
  public details:any;
  public userDetails:any;
  public skills=[];
  public countJobs;
  ngOnInit() {
  
    this.details=this.apiservice.returnSelectedProjectData();
    if(this.details==null)
     this.route.navigate(['dashboard']);
     this.skills=this.details.skillsRequired.split(" ");
    this.apiservice.callApi('GETBYPARAMS', '', 'user',localStorage.getItem('userId')).subscribe((data: any) => {
      this.userDetails=data[0];
      })
      this.apiservice.callApi('GETBYPARAMS', '', 'timeline',this.details.userId).subscribe((data: any) => {
        this.countJobs=data.length;      
        });

  } 
}
