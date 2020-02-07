import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-add-contact-modal',
  templateUrl: './add-contact-modal.component.html',
  styleUrls: ['./add-contact-modal.component.scss']
})
export class AddContactModalComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
