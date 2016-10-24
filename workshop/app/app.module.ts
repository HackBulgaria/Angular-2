import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routing';
import { UserModule } from './user/user.module';
import { AuthService } from './auth.service';
import { AuthHttp } from './authHttp.service';
import { HotelModule } from './hotel/hotel.module';

@NgModule({
    imports: [ BrowserModule, RouterModule, appRoutes, UserModule, HotelModule ],
    declarations: [ AppComponent, HomeComponent ],
    providers: [ AuthService, AuthHttp ],
    bootstrap: [ AppComponent ]
}) export class AppModule {

}