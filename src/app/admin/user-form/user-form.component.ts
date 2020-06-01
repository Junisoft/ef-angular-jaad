import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import User from '../../models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() model: User;
  @Output() onSaveForm = new EventEmitter();
  isLoading = false;
  
  userForm;
  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('model >', this.model);
    this.userForm = new FormGroup({
      name: new FormControl(this.model.name || '', [
        Validators.required
      ]),
      lastname: new FormControl(this.model.lastname || '', [
        Validators.required
      ]),
      email: new FormControl(this.model.email || '', [
        Validators.required, Validators.email
      ]),
      role: new FormControl(this.model.role || '', [
        Validators.required
      ]),
      password: new FormControl(this.model.password || '', [
        Validators.required, Validators.minLength(6)
      ]),
      phone: new FormControl(this.model.phone || '', [
        Validators.required, Validators.pattern(/^[1-9]\d*(\.\d+)?$/), Validators.minLength(7)
      ])
    });
  }

  onSubmit() {
    const {value, valid} = this.userForm;
    if (valid) {
      this.isLoading = true;

      if(this.model.id) {
        value.id = this.model.id;
      }

      this.onSaveForm.emit(value);
    }
  }

  onBack() {
    this.location.back();
  }

}
