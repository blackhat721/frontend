import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RoomComponent } from './components/room/room.component';
import { TimeAgoPipe } from './Pipe/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    RoomsComponent,
    RegistrationFormComponent,
    LoginComponent,
    RoomComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
