import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsDataService {
  contactsData: any;
  constructor(private httpClient: HttpClient) {
  }

  getContactsData = () => {
    return this.httpClient.get('http://localhost:3000/contactsInfo');
  }

  addnewContact = (newContactData: any) => {
    return this.httpClient.post('http://localhost:3000/contactsInfo',newContactData);

  }

  updateContact = (dataToUpdate: any) => {
    return this.httpClient.put('http://localhost:3000/contactsInfo/'+ '/' + dataToUpdate.id,dataToUpdate);
  }

  deleteContact = (dataToDelete: any) => {
    return this.httpClient.delete('http://localhost:3000/contactsInfo/'+ dataToDelete.id + '/');
  }
}
