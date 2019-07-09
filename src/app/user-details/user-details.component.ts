import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: [ './user-details.component.css' ]
})
export class UserDetailsComponent implements OnInit {
	constructor(private apiservice: ApiService) {}
	public userDetails: any;
	public projectCount;
	public followingList = [];
	public skills;
	public followingUser = false;
	ngOnInit() {
		this.userDetails = JSON.parse(localStorage.getItem('userDetails'));

		this.skills = this.userDetails.skills.split(',');

		this.apiservice.callApi('GETBYPARAMS', '', 'timeline', this.userDetails._id).subscribe((data: any) => {
			this.projectCount = data.posts;
			// this.followingCheck();
		});
    	this.followingList = JSON.parse(localStorage.getItem('followingList'));
	}

	// followingCheck() {
	// 	for (let i = 0; i < list.length; i++) {
	// 		if (list[0] == this.userDetails._id) {
  //       this.followingUser=true;
  //       return;
	// 		}
	// 	}
	// }

	onFollow(followId) {
// this.followingCheck();
		const body = {
			userId: localStorage.getItem('userId'),
			followId: followId
		};

		this.apiservice.callApi('PUT', body, 'user', '').subscribe((data: any) => {
			alert('Followed Successfully');
		});
	}
}

// dateOfJoining: "21/4/2019"
// email: "ashishume@gmail.com"
// followers: []
// following: []
// location: "Bangalore"
// mobile: 8557098095
// name: "Ashish Debnath"
// paymentverificationStatus: 0
// profilePicture: "https://lh3.googleusercontent.com/-oCJoo5ABVbk/AAAAAAAAAAI/AAAAAAAAC90/xJKmCQ7raOo/photo.jpg"
// rate: "7"
// skills: "Nodejs,MangoDb,Angularjs,Angular 7,React,PHP,MySql"
// tickets: "50"
// userDescription: "Helllo there"
// userType: "Employer"
// __v: 0
// _id: "5cbc3e4bbbcbe335ceb71c12"
