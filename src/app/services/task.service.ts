import { Injectable } from '@angular/core';
import { PhoneBook } from 'src/app/interfaces/phone-book';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private contacts: PhoneBook[] = []
  getContacts(): PhoneBook[] {
    return this.contacts;
  }

  getContact(id: number):PhoneBook {
    const contact = this.contacts.find(c => c.id === id);
    const index = this.contacts.findIndex(c => c.id === id);
    if (contact !== undefined) {
      this.contacts[index] = contact;
    return contact;
    }
    // If the contact is not found, return an Observable that emits an error
    throw new Error('Contact not found.');
  }

  addContact(contact: PhoneBook): void {
    const existingContact = this.contacts.find(c => c.name === contact.name || c.phone === contact.phone);
    if (existingContact) {
      const confirmation = confirm(`A contact with name '${contact.name}' already exists. Do you want to update it?`);
      if (confirmation) {
        this.updateContact({...existingContact, ...contact});
    }
      
    } else {
      const newId = this.contacts.length > 0 ? Math.max(...this.contacts.map(c => c.id)) + 1 : 1;
      this.contacts.push({...contact, id: newId});
    }
  }

  updateContact(contact: PhoneBook): void {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    this.contacts[index] = contact;
  }

  deleteContact(id: number): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
 
}



