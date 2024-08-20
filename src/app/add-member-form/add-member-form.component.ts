import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-member-form',
  templateUrl: './add-member-form.component.html',
  styleUrls: ['./add-member-form.component.css']
})
export class AddMemberFormComponent {
  email: string = '';
  permission: string = 'User';

  @Output() memberAdded = new EventEmitter<{ email: string, permission: string, updated: Date }>();
  @Output() close = new EventEmitter<void>();

  onSubmit() {
    if (this.email) {
      this.memberAdded.emit({
        email: this.email,
        permission: this.permission,
        updated: new Date()
      });
      this.email = '';
      this.permission = 'Read';
      this.close.emit();
    }
  }

  onClose() {
    this.email = '';
    this.permission = 'Read';
    this.close.emit();
  }
}