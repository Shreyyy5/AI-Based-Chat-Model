import { Component } from '@angular/core';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css']
})
export class ConversationsComponent {
  // Method to open the export modal
  openModal() {
    const modal = document.getElementById('exportModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Method to close the export modal
  closeModal() {
    const modal = document.getElementById('exportModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Method to open the delete confirmation modal
  openDeleteModal() {
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  // Method to close the delete confirmation modal
  closeDeleteModal() {
    const modal = document.getElementById('deleteModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  // Method to confirm deletion
  confirmDelete() {
    this.closeDeleteModal(); // Close the modal
    console.log("Conversation deleted.");
    // Add your logic here to delete the conversation
  }

  // Method to handle data export
  exportData() {
    this.closeModal(); // Close the modal

    // Add logic here to export your data
    console.log("Exporting data...");
    // Simulate export process or call an export service
  }

  // Method to refresh changes (refresh button functionality)
  refreshData() {
    // Add your logic here to refresh the data
    console.log("Refreshing data...");
    // Simulate data refresh
  }

  ngOnInit() {
    window.onclick = (event: any) => {
      const exportModal = document.getElementById('exportModal');
      const deleteModal = document.getElementById('deleteModal');
      if (event.target === exportModal) {
        this.closeModal();
      } else if (event.target === deleteModal) {
        this.closeDeleteModal();
      }
    };
  }
}
