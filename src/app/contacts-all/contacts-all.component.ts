import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-all',
  templateUrl: './contacts-all.component.html',
  styleUrls: ['./contacts-all.component.css']
})
export class ContactsAllComponent implements OnInit {

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
  }

}
