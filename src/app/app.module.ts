import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD

=======
>>>>>>> 6c7a49d78441a35481fb249e084a88cff1bb7ce7



@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
<<<<<<< HEAD
=======

>>>>>>> 6c7a49d78441a35481fb249e084a88cff1bb7ce7
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
