import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Rx from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	constructor(private http: HttpClient) {}

	public BASE_URL = 'https://deathkingmaster.herokuapp.com';

	public selectedProjectData;
	public selectedProfileEmail;
	public userDetails;

	//***********API CALLS***********//

	public callApi(method: string, body: any, api: string, params: string): any {
		switch (method) {
			case 'POST':
				const postObserver = new Rx.Observable((observer) => {
					this.post(body, api).subscribe((data) => {
						// POST METHOD TO POST DATA INTO THE DATABASE
						observer.next(data);
					});
				});
				return postObserver;
			case 'GET':
				const getObserver = new Rx.Observable((observer) => {
					this.get(api).subscribe((data) => {
						// GET METHOD TO GET DATA FROM THE DATABASE
						observer.next(data);
					});
				});
				return getObserver;
			case 'GETBYPARAMS':
				const getByParamsObserver = new Rx.Observable((observer) => {
					this.getbyparams(api, params).subscribe((data) => {
						// GET METHOD TO GET DATA FROM THE DATABASE
						observer.next(data);
					});
				});
				return getByParamsObserver;
			case 'PUT':
				const putObserver = new Rx.Observable((observer) => {
					this.put(body, api).subscribe((data) => {
						// GET METHOD TO GET DATA FROM THE DATABASE
						observer.next(data);
					});
				});
				return putObserver;
		}
	}

	private post(body: string, api: string) {
		return this.http.post(`${this.BASE_URL}/${api}`, body);
	}

	private get(api: string) {
		return this.http.get(`${this.BASE_URL}/${api}`);
	}
	private getbyparams(api: string, param: string) {
		return this.http.get(`${this.BASE_URL}/${api}/${param}`);
	}
	private put(body: string, api: string) {
		return this.http.put(`${this.BASE_URL}/${api}`, body);
	}

	//***********API CALLS***********//

	passSelectedProjectData(list) {
		this.selectedProjectData = list;
	}
	returnSelectedProjectData() {
		return this.selectedProjectData;
	}
	passSelectedProfile(email) {
		this.selectedProfileEmail = email;
	}
	returnSelectedProfile() {
		return this.selectedProfileEmail;
	}

	passUserDetails(list) {
		this.userDetails = list;
	}

	returnUserDetails() {
		return this.userDetails;
	}
}
