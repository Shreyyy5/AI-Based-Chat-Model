import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent {
  isModalOpen = false;
  newMember = {
    email: '',
    permission: 'User'
  };

  showAddMemberForm = false;
  members: { email: string, permission: string, updated: Date }[] = [];
  openAddMemberForm() {
    this.showAddMemberForm = true;
  }

  addMember(member: { email: string, permission: string, updated: Date }) {
    this.members.push(member);
    this.showAddMemberForm = false;
  }

  removeMember(member: { email: string }) {
    this.members = this.members.filter(m => m.email !== member.email);
  }
}
