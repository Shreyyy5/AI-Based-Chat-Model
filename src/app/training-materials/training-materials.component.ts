import { Component } from '@angular/core';

@Component({
  selector: 'app-training-materials',
  templateUrl: './training-materials.component.html',
  styleUrls: ['./training-materials.component.css']
})
export class TrainingMaterialsComponent {
  activeTab: string = 'FileUpload'; // Default active tab
  websiteUrl: string = ''; // Bind to the input field

  // Method to switch tabs
  openTab(tabName: string): void {
    this.activeTab = tabName;
  }

  // Method to handle file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.onFilesDropped(event.dataTransfer?.files);
  }

  // Method to handle drag over
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    const fileUploadArea = event.target as HTMLElement;
    fileUploadArea.classList.add('dragover');
  }

  // Method to handle drag leave
  onDragLeave(event: DragEvent): void {
    const fileUploadArea = event.target as HTMLElement;
    fileUploadArea.classList.remove('dragover');
  }

  // Method to handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.onFilesDropped(input.files);
  }

  onFilesDropped(files: FileList | null): void {
    if (files) {
      Array.from(files).forEach(file => {
        console.log('File dropped:', file.name);
        // Handle file upload here
      });
    }
  }

  // Method to fetch URL
  fetchUrl(): void {
    console.log('Fetching URL:', this.websiteUrl);
    
  }
}
