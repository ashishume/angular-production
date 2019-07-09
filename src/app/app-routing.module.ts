import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthGuardService } from './shared/auth-guard/auth-guard.service';
import {PageNotFoundComponent} from  './page-not-found/page-not-found.component';
import { TimelineComponent } from './timeline/timeline.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SubmitProjectComponent } from './submit-project/submit-project.component';
const routes: Routes = [
  { path: '', component: SignInComponent},
  {path:'mat-navbar',component:MatNavbarComponent,canActivate:[AuthGuardService]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuardService]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'project-details',component:ProjectDetailsComponent,canActivate:[AuthGuardService]},
  { path: 'timeline', component: TimelineComponent,canActivate:[AuthGuardService] },
  { path: 'users', component: UsersComponent,canActivate:[AuthGuardService] },
  { path: 'user-details', component: UserDetailsComponent,canActivate:[AuthGuardService] },
  { path: 'signup', component: SignupComponent },
  { path: 'submit-project', component: SubmitProjectComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
