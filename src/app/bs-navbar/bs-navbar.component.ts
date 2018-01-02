import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {

  user: firebase.User;

  constructor(private _afAuth: AngularFireAuth) {}

  ngOnInit() {
    this._afAuth.authState.subscribe(user => this.user = user);
  }

  logout() {
    this._afAuth.auth.signOut();
  }

}
