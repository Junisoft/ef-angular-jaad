import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent,
        children: [
            {path: 'users', component: UsersComponent},
            {path: 'users/new', component: UserNewComponent},
            {path: 'users/:id', component: UserEditComponent},
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}