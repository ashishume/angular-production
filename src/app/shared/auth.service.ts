import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import * as Rx from 'rxjs';
import { ApiService } from './api.service';
export interface User {
	uid: string;
	email: string;
	displayName: string;
	photoURL: string;
}

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	userData: any; // Save logged in user data
	public getLoggedInEmail = new Rx.Subject();
	public getLoggedInName = new Rx.Subject();
	constructor(
		public afs: AngularFirestore, // Inject Firestore service
		public afAuth: AngularFireAuth, // Inject Firebase auth service
		public router: Router,
		private apiservice: ApiService,
		public ngZone: NgZone // NgZone service to remove outside scope warning
	) {
		/* Saving user data in localstorage when 
    logged in and setting up null when logged out */
		this.afAuth.authState.subscribe((user) => {
			if (user) {
				this.userData = user;
				localStorage.setItem('user', JSON.stringify(this.userData));
				JSON.parse(localStorage.getItem('user'));
			} else {
				localStorage.setItem('user', null);
				JSON.parse(localStorage.getItem('user'));
			}
		});
	}

	get isLoggedIn(): boolean {
		const user = JSON.parse(localStorage.getItem('user'));
		return user != null ? true : false;
	}

	GoogleAuth() {
		return this.AuthLogin(new auth.GoogleAuthProvider());
	}
	// Auth logic to run auth providers
	AuthLogin(provider) {
		return this.afAuth.auth
			.signInWithPopup(provider)
			.then((result) => {
				this.ngZone.run(() => {
					const email = {
						email: result.user.email
					};
					this.apiservice.callApi('POST', email, 'userLogin', '').subscribe((data: any) => {
						if (data.status == 0) {
							this.router.navigate([ 'signup' ]);
						} else {
							localStorage.setItem('userId', data.object[0]._id);
							localStorage.setItem('followingList',JSON.stringify(data.object[0].following))
							this.router.navigate([ 'dashboard' ]);
						}
					});
				});
				this.SetUserData(result.user);
			})
			.catch((error) => {
				window.alert(error);
			});
	}

	SetUserData(user) {
		const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
		const userData: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL
		};
		this.getLoggedInEmail.next(userData.email);
		this.getLoggedInName.next(userData.displayName);

		localStorage.setItem('userEmail', userData.email);
		localStorage.setItem('userName', userData.displayName);
		localStorage.setItem('userPhotoUrl', userData.photoURL);
		return userRef.set(userData, {
			merge: true
		});
	}

	SignOut() {
		return this.afAuth.auth.signOut().then(() => {
			this.getLoggedInEmail.next('');
			this.getLoggedInEmail.next('');
			localStorage.clear()
			this.router.navigate([ '' ]);
		});
	}
}
