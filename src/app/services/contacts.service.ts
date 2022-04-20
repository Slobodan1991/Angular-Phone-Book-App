import { Injectable } from '@angular/core';
import PhoneBook from '../model/PhoneBook'
import PhoneBookContact from '../model/PhoneBookContact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  phonebook: PhoneBook;
  constructor() {
    this.phonebook = new PhoneBook();
   }

   addContact(name:any, number:any) {
     
    let contact = new PhoneBookContact(name + " " + number);
      this.phonebook.add(contact); 
    
   }

   deleteContact(contact: any) {
     this.phonebook.delete(contact);
   }
}
