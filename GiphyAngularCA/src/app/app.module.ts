import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { WelcomeGiphyWorldComponent } from './welcome-giphy-world/welcome-giphy-world.component';
import { Service } from './service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeGiphyWorldComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [Service],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
