import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    public authService:AuthService,
    private route:Router
    ) { }
public userName;

  ngOnInit() {
    this.authService.getLoggedInName.subscribe(data=>{
      this.userName=data;
    })
    if(this.userName==null)
    {
      this.userName=localStorage.getItem('userEmail');
    }

if(this.userName!=null)
{
  this.route.navigate(['dashboard']);
}

  }

}
