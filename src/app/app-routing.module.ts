import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { UsersComponent } from './admin/users/users.component';
import { UserNewComponent } from './admin/user-new/user-new.component';
import { UserEditComponent } from './admin/user-edit/user-edit.component';

const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}