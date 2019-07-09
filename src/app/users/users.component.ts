import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users=[];
  public skills;
  constructor(private apiservice:ApiService,private route:Router) { }

  ngOnInit() {
    this.apiservice.callApi('GET','','user','').subscribe((data:any)=>{

      for(let i=0;i<data.length;i++)          //logic which doesnot show its own data in developers
      {
        if(data[i].email!=localStorage.getItem('userEmail'))
        { 
          this.users.push(data[i]);
        }
      }
    })
  }
  
  onGettingDetails(list)
  {
    this.apiservice.passUserDetails(list);
    localStorage.setItem('userDetails',JSON.stringify(list))
    this.route.navigate(['user-details']);

  }

}
