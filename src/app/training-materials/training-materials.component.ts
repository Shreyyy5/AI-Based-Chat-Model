import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training-materials',
  templateUrl: './training-materials.component.html',
  styleUrls: ['./training-materials.component.css']
})
export class TrainingMaterialsComponent implements OnInit {
  activeTab: string = 'FileUpload'; 
  websiteUrl: string = ''; 
  siteMap: string = ''; 
  textTitle: string = '';
  textBody: string = '';
  searchQuery: string = '';
  urlInputs: string[] = ['']; // Array to store URL input boxes
  urls: string[] = []; // Array to store added URLs


  allTrainingMaterials: any[] = []; // Assuming you have a list of all training materials
  filteredTrainingMaterials: any[] = [];

  materials = [
    { name: 'Material 1', type: 'File', characters: 1500, status: 'Untrained', lastTrained: null, selected: false },
    { name: 'Material 2', type: 'URL', characters: 2000, status: 'Trained', lastTrained: '2024-08-20', selected: false },
    { name: 'Material 3', type: 'Text', characters: 1000, status: 'Untrained', lastTrained: null, selected: false },
  ];

  filteredMaterials = this.materials;

  ngOnInit() {
    this.filteredTrainingMaterials = this.allTrainingMaterials; // Initialize with all items
    this.filterTrainingMaterials(); // Initialize filtered materials
  }

  // Method to switch tabs
  openTab(tabName: string): void {
    console.log(`Opening tab: ${tabName}`);
    this.activeTab = tabName;
  }

  fetchUrl(): void {
    console.log('Fetch URL clicked with:', this.websiteUrl);
  }

  addSiteFile(): void {
    console.log('Add Site File clicked');
  }

  trainOnText(): void {
    console.log('Train on Text clicked with Title:', this.textTitle, 'and Body:', this.textBody);
  }

  filterTrainingMaterials(): void {
    this.filteredMaterials = this.materials.filter(material =>
      material.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectAllUntrained(): void {
    this.filteredMaterials.forEach(material => {
      if (material.status === 'Untrained') {
        material.selected = true;
      }
    });
  }


  // Method to add a new URL input box
  addInput() {
    this.urlInputs.push(''); // Add a new empty input box
  }

  // Method to remove a URL input box
  removeInput(index: number) {
    if (this.urlInputs.length > 1) {
      this.urlInputs.splice(index, 1);
    }
  }

  // Method to add URLs from input boxes to the URL list
  addUrls() {
    this.urls = []; // Clear existing URLs
    for (const urlInput of this.urlInputs) {
      const urls = urlInput.split('\n') // Split by newline for multi-line input
        .map(url => url.trim())
        .filter(url => url.length > 0);
      this.urls.push(...urls); // Add new URLs to the list
    }
    this.urlInputs = ['']; // Reset input boxes to one empty input
  }

  // Method to remove a URL from the list
  removeUrl(index: number) {
    this.urls.splice(index, 1);
  }

  // Method to upload all URLs
  async uploadAllUrls() {
    if (this.urls.length > 0) {
      for (const url of this.urls) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            console.log('Successfully uploaded:', url);
          } else {
            console.error('Failed to upload:', url);
          }
        } catch (error) {
          console.error('Error uploading URL:', url, error);
        }
      }
    } else {
      console.log('No URLs to upload.');
    }
  }

    

  

   
  selectAll(): void {
    this.filteredMaterials.forEach(material => material.selected = true);
  }

  retrain(material: any): void {
    // Implement re-train logic here
    console.log(`Re-training ${material.name}`);
  }

  deleteMaterial(material: any): void {
    // Implement delete logic here
    console.log(`Deleting ${material.name}`);
    this.materials = this.materials.filter(m => m !== material);
    this.filterTrainingMaterials(); // Refresh the filtered list
  }

  trainSelected(): void {
    // Implement the logic to train the selected materials
    const selectedMaterials = this.materials.filter(material => material.selected);
    console.log('Training the following materials:', selectedMaterials);
    // Add your training logic here
  }

  // Method to handle file drop
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    this.onFilesDropped(event.dataTransfer?.files || null);
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
}
