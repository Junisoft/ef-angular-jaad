import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import User from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm;
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required
      ]),
      lastname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required, Validators.email
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(6)
      ]),
      phone: new FormControl('', [
        Validators.required, Validators.pattern(/^[1-9]\d*(\.\d+)?$/), Validators.minLength(7)
      ])
    });
  }

  onBack() {
    this.location.back();
  }

}
