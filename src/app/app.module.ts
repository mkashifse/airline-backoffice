import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppState } from './store/app.state';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { HeaderComponent } from './components/header/header.component';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LeftNavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    NgxsModule.forRoot([
      AppState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
