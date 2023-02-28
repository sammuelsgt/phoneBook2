import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneBook } from 'src/app/interfaces/phone-book';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

constructor(private taskService:TaskService, private router: Router){}
addContact(name: string, email: string, phone: string): void {
  this.taskService.addContact({ name, email, phone } as PhoneBook);
  this.router.navigateByUrl('/');
}
}
