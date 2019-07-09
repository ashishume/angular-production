import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AppMaterialModule} from './app-material.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MatNavbarComponent } from './mat-navbar/mat-navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ApiService } from './shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { AuthService } from './shared/auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TimelineComponent } from './timeline/timeline.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { UsersComponent } from './users/users.component';
import {SignupComponent} from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ErrorDialogComponent } from './shared/interceptor/error-dialog/error-dialog.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor} from '../app/shared/interceptor/httpconfig.interceptor';
import { ErrorDialogService} from '../app/shared/interceptor/error-dialog.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SubmitProjectComponent } from './submit-project/submit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    MatNavbarComponent,
    DashboardComponent,
    ProfileComponent,
    ProjectDetailsComponent,
    SignInComponent,
    PageNotFoundComponent,
    TimelineComponent,
    NewsFeedComponent,
    UsersComponent,
    SignupComponent,
    ErrorDialogComponent,
    UserDetailsComponent,
    SubmitProjectComponent,
    
  ],
  imports: [
    Ng2SearchPipeModule,
    NgScrollbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserModule,
    NgMultiSelectDropDownModule,
    AppRoutingModule,
    HttpClientModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    LayoutModule,
    
  ],
  exports:[
    ProjectDetailsComponent,
    ErrorDialogComponent
  ],
  entryComponents:[
    ProjectDetailsComponent,
    ErrorDialogComponent
  ],
  providers: [
    ApiService,
    AuthService,
    ErrorDialogService,
    {provide:HTTP_INTERCEPTORS,useClass: HttpConfigInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
