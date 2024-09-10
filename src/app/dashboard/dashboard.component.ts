import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isMenuVisible: boolean = false;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  isAiNav = true; // Default to AI Nav view
  toggleText = 'AI Nav';



  view: string = 'aiNav'; // Default view

  toggleView(viewType: string) {
    this.view = viewType;
  }
}
