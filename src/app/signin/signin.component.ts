import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  goto() {
    this._router.navigate(['/userRegistration'])
  }
}
