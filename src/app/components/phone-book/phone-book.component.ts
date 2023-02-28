import { Component } from '@angular/core';
import { PhoneBook } from 'src/app/interfaces/phone-book';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
contacts: PhoneBook[] =[]
constructor(private taskService:TaskService){}

ngOnInit(): void {
  this.contacts = this.taskService.getContacts();
}

addContact(name: string, email: string, phone: string): void {
  const contact = { name, email, phone } as PhoneBook;
  this.taskService.addContact(contact)
}

deleteContact(id: number): void {
  this.taskService.deleteContact(id);
  this.contacts = this.taskService.getContacts();
  }

}
