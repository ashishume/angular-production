import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.css' ]
})
export class SignupComponent implements OnInit {
	isLinear = true;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
	public showSpinner=false;

	dropdownList = [];
	selectedItems = [];
	dropdownSettings = {};
	public body: any = {};
	public items = {};
	public selectedItem = [];
	myDate = new Date();
	constructor(
		public authservice: AuthService,
		private _formBuilder: FormBuilder,
		private apiservice: ApiService,
		private route: Router
	) {}

	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
			mobile: [ '', Validators.required ],
			userType: [ '', Validators.required ],
			rate: [ '', Validators.required ]
		});
		this.secondFormGroup = this._formBuilder.group({
			description: [ '', Validators.required ],
			skills: [ '', Validators.required ],
			location: [ '', Validators.required ]
		});

		this.dropdownList = [
			{ skillsId: 1, skills: 'Nodejs' },
			{ skillsId: 2, skills: 'MangoDb' },
			{ skillsId: 3, skills: 'Angularjs' },
			{ skillsId: 4, skills: 'Angular 7' },
			{ skillsId: 5, skills: 'React' },
			{ skillsId: 6, skills: 'PHP' },
			{ skillsId: 7, skills: 'MySql' }
		];
		this.selectedItems = [];
		this.dropdownSettings = {
			singleSelection: false,
			idField: 'skillsId',
			textField: 'skills',
			selectAllText: 'Select All',
			unSelectAllText: 'UnSelect All',
			itemsShowLimit: 5,
			maxHeight: 100,
			allowSearchFilter: true
		};
	}
	onItemSelect(item: any) {
		// console.log(item);
	}
	onSelectAll(items: any) {
		// console.log(items);
	}

	onDescriptionDetails(details: NgForm) {
		let value = null;
		this.items = { skills: details.value };
		this.selectedItem = this.items[Object.keys(this.items)[0]];

		this.selectedItem['skills'].forEach(function(data) {
			value = value + data.skills + ',';
		});
		value = value.substring(4, value.length - 1);

		this.body.location = details.value.location;
		this.body.userDescription = details.value.description;
		this.body.skills = value;

		this.apiservice.callApi('POST', this.body, 'user/signup', '').subscribe((data: any) => {
			const userId=data.object._id;
			localStorage.setItem('userId',userId);
			localStorage.setItem('followingList',JSON.stringify(data.object.following))	
			this.showSpinner=true;
			this.route.navigate([ 'dashboard' ]);
		});
	}

	onSubmit(details: NgForm) {
		var date = new Date();
		var presentDate = date.getDate() + '/' + (new Date().getMonth() + 1) + '/' + date.getFullYear();

		this.body = {
			tickets: '50',
			name: localStorage.getItem('userName'),
			email: localStorage.getItem('userEmail'),
			mobile: details.value.mobile,
			userType: details.value.userType,
			rate: details.value.rate,
			profilePicture: localStorage.getItem('userPhotoUrl'),
			dateOfJoining: presentDate,
			location: '',
			userDescription: '',
			skills: ''
		};
	}
}
