import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

// import { AppRoutingModule } from './app-routing.module'; to be used if routing required.
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddContactModalComponent } from './components/modal_components/add-contact-modal/add-contact-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    AddContactModalComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule
  ],
  entryComponents:[AddContactModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
