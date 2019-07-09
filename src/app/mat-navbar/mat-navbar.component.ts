import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-mat-navbar',
  templateUrl: './mat-navbar.component.html',
  styleUrls: ['./mat-navbar.component.css']
})
export class MatNavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,public authService:AuthService) {}

  public getEmail;

  ngOnInit()
  {
   this.authService.getLoggedInEmail.subscribe(data=>{
     this.getEmail=data;
   }) 

   if(this.getEmail==null)
   {
     this.getEmail=localStorage.getItem('userEmail')
   }
  }
}
