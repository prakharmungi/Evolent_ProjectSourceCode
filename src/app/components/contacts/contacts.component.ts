import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContactsDataService } from '../../services/contacts-data.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AddContactModalComponent } from '../modal_components/add-contact-modal/add-contact-modal.component';
import { ContactData } from '../../interfaces/contact-data';
import * as _ from 'underscore';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  headings = [];
  modalRef: BsModalRef;
  showAddEditForm: boolean;
  formData: ContactData;
  formHeading: string;
  formButtonText: string;
  updateIconClicked: number;
  shareIconClicked: number;

  contactsData: ContactData[];
  constructor(private contactsDataService: ContactsDataService,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.formData = { firstName: '', lastName: '', email: '', phNumber: '' }
    this.headings = ['Name', 'Email', 'Phone number'];
    this.getContactsData();
    this.showAddEditForm = false;
  }

  openModalWithComponent() {
    this.modalRef = this.modalService.show(AddContactModalComponent);
    this.modalRef.content.addBtnName = 'Add Contact';
  }

  addBtnClicked = () => {
    this.showAddEditForm = true;
    this.formHeading = 'Create new contact - ';
    this.formButtonText = 'Save';
    this.formData = { firstName: '', lastName: '', email: '', phNumber: '' };
    this.shareIconClicked = null;
    this.updateIconClicked = null;
  }

  editBtnClicked = (contactData: ContactData, index:number) => {
    this.updateIconClicked = index;
    this.shareIconClicked = null;
    this.showAddEditForm = true;
    this.formHeading = 'Update this contact - ';
    this.formData = Object.assign({}, contactData);
    this.formButtonText = 'Update';
  }

  getContactsData = () => {
    this.contactsDataService.getContactsData().subscribe((response: ContactData[]) => {
      this.contactsData = response;
    });
  }

  deleteBtnClicked = (contactData: ContactData) => {
    this.showAddEditForm = false;
    this.contactsDataService.deleteContact(contactData).subscribe(() => {
      this.contactsData  = _.filter(this.contactsData, (eachContactData:ContactData) => {
        return contactData.id !== eachContactData.id;
      })
    });
  }

  shareBtnClicked = (index: number) => {
    this.openModalWithComponent();
    this.shareIconClicked = index;
    this.updateIconClicked = null;
    this.showAddEditForm = false
  }

  saveContact = () => {
    if(this.formData.phNumber.toString().length === 10){
    this.showAddEditForm = false;
    if (this.formButtonText === 'Save') {
      this.contactsDataService.addnewContact(this.formData).subscribe((response: ContactData) => {
        this.contactsData.push(response);
      });
    } else {
      this.contactsDataService.updateContact(this.formData).subscribe((response: ContactData) => {
        let contactsData = _.map(this.contactsData, (contactData: ContactData) => {
          if (contactData.id === response.id) {
            return response;
          } else {
            return contactData;
          };
        });
        this.contactsData = contactsData;
      });
    }
    this.formData = { firstName: '', lastName: '', email: '', phNumber: '' };
    this.updateIconClicked = null;
  } else {
    alert('Please enter a 10 digit phone number!!')
  }
}
}
