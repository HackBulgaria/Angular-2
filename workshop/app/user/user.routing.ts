import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user.component';
import { AuthService } from '../auth.service';
import { ListComponent } from './list/list.component';
import { UserListResolver } from './user.service';

const routes:Routes = [
    {
        path: 'user',
        component: UserComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
                resolve: [ UserListResolver ],
                data: {
                    title: 'User List'
                },
                canActivate: [ AuthService ]
            },
            {
                path: 'login',
                component: LoginComponent,
                data: {
                    title: 'Login'
                }
            }
        ]
    }
];

export const userRoutes:ModuleWithProviders = RouterModule.forChild(routes);