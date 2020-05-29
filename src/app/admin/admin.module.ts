import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { AdminComponent } from './admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  providers: [
  ]
})
export class AdminModule { }
