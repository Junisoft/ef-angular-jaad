import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AdminComponent } from './admin.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { MaterialModule } from '../material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UsersComponent,
    UserNewComponent,
    UserEditComponent,
    UserFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    UsersComponent
  ],
  providers: [
    
  ]
})
export class AdminModule { }
