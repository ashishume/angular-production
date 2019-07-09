import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { AuthService } from '../shared/auth.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: [ './profile.component.css' ]
})
export class ProfileComponent implements OnInit {
  public userDetails;
  public skills;
  public countJobs;
	constructor(private apiservice: ApiService, public authservice: AuthService) {}
	ngOnInit() {
    const userId=localStorage.getItem('userId');
    this.apiservice.callApi('GETBYPARAMS','','user',userId).subscribe((data:any)=>{
      this.userDetails=data[0];
      this.skills=this.userDetails.skills.split(",");
    })
  
    this.apiservice.callApi('GETBYPARAMS', '', 'timeline',userId).subscribe((data: any) => {
        
      this.countJobs=data.posts;
            
      });

  }


  
}
