import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(
    private apiservice:ApiService,
    public authservice:AuthService,
    private route:Router,
    public dialog: MatDialog
    ) {}
public newsFeedData:any;
public getEmail;
public getName;
public userDetails:any;
public skills=[];
public userId;
public users;
  ngOnInit()
  {
    this.userId=localStorage.getItem('userId');

    this.apiservice.callApi('GET','','newsFeed','').subscribe((data:any)=>{
     this.newsFeedData=data;
     this.newsFeedData.forEach(function(value){
      if(value.description.length>150)
      {
        value.description=value.description.substr(0,150)+"...";
      }  
     });
    })

    this.apiservice.callApi('GETBYPARAMS','','user',this.userId).subscribe((data:any)=>{
      this.userDetails=data;
      this.skills=this.userDetails[0].skills.split(",");      
    })


    this.apiservice.callApi('GET','','user','').subscribe((data:any)=>{
     this.users=data; 
         
    })

    this.authservice.getLoggedInEmail.subscribe(data=>{
      this.getEmail=data;
    }) 
    if(this.getEmail==null)
      this.getEmail=localStorage.getItem('userEmail');

    this.authservice.getLoggedInName.subscribe(data=>{
      this.getName=data;
    }) 
    if(this.getName==null)
      this.getName=localStorage.getItem('userName');

  }

  projectData(list)
  {
    this.apiservice.passSelectedProjectData(list);
    
    
    // const reference = this.dialog.open(ProjectDetailsComponent,{
      this.route.navigate(['project-details'])
    // });

    // reference.afterClosed().subscribe(result => {

    //   if (result === true) {
    //   }
    // });
    


   // this.route.navigate(['project-details'])
  }

  myProfile(email)
  {
    this.apiservice.passSelectedProfile(email);
    this.route.navigate(['profile'])    
  }

}
