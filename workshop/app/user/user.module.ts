import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/login.component';
import { userRoutes } from './user.routing';
import { UserService, UserListResolver } from './user.service';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [ FormsModule, HttpModule, userRoutes, CommonModule ],
    declarations: [ LoginComponent, UserComponent, ListComponent ],
    providers: [ UserService, UserListResolver ]
}) export class UserModule {

}