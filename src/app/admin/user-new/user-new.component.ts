import { Component, OnInit } from '@angular/core';
import User from '../../models/user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSaveUser(user: User) {
    this.userService.createUser(user)
     .subscribe(() => {
       // redirect to admin/users
       this.router.navigate(['/admin/users']);
     });
  }

}
