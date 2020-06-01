import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import User from '../../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log('id >', id);
      this.userService.getUserById(id)
      .subscribe((user: User) => {
        console.log('user >', user);
        this.user = user;
      });
    });
  }

  onSaveUser(user: User) {
    this.userService.updateUser(user)
     .subscribe(() => {
       // redirect to admin/users
       this.router.navigate(['/admin/users']);
     });
  }

}
