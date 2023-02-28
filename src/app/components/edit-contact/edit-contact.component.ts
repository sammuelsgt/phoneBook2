import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhoneBook } from 'src/app/interfaces/phone-book';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  contact: PhoneBook 
  = {
    id: 0,
    name: '',
    email: '',
    phone: ''
  };

  constructor(
    private route: ActivatedRoute,
    private TaskService: TaskService,
    private router: Router
    ) { }

ngOnInit(): void {
const id = +this.route.snapshot.paramMap.get('id')!;

  this.contact = this.TaskService.getContact(id);


}

saveChanges(name: string, email: string, phone: string): void {
this.TaskService.updateContact({...this.contact, name, email, phone});
this.router.navigateByUrl('/');
}
  
}
