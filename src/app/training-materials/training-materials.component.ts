import { Component } from '@angular/core';

@Component({
  selector: 'app-training-materials',
  templateUrl: './training-materials.component.html',
  styleUrls: ['./training-materials.component.css']
})
export class TrainingMaterialsComponent {
  activeTab: string = 'FileUpload'; 
  websiteUrl: string = ''; 
  siteMap: string = ''; 
  textTitle: string = '';
  textBody: string = '';
  searchQuery: string = '';
allTrainingMaterials: any[] = []; // Assuming you have a list of all training materials
filteredTrainingMaterials: any[] = [];

materials = [
  { name: 'Material 1', type: 'File', characters: 1500, status: 'Untrained', lastTrained: null, selected: false },
  { name: 'Material 2', type: 'URL', characters: 2000, status: 'Trained', lastTrained: '2024-08-20', selected: false },
  { name: 'Material 3', type: 'Text', characters: 1000, status: 'Untrained', lastTrained: null, selected: false },
];
  
  // Method to switch tabs
  openTab(tabName: string): void {
    console.log(`Opening tab: ${this.websiteUrl}`);
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

  ngOnInit() {
    this.filteredTrainingMaterials = this.allTrainingMaterials; // Initialize with all items
  }
  
  // searchQuery = '';
  filteredMaterials = this.materials;

  filterTrainingMaterials() {
    this.filteredMaterials = this.materials.filter(material =>
      material.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  selectAllUntrained() {
    this.filteredMaterials.forEach(material => {
      if (material.status === 'Untrained') {
        material.selected = true;
      }
    });
  }

  selectAll() {
    this.filteredMaterials.forEach(material => material.selected = true);
  }

  retrain(material) {
    // Implement re-train logic here
    console.log(`Re-training ${material.name}`);
  }

  deleteMaterial(material) {
    // Implement delete logic here
    console.log(`Deleting ${material.name}`);
    this.materials = this.materials.filter(m => m !== material);
    this.filterTrainingMaterials(); // Refresh the filtered list
  }

  trainSelected() {
    // Implement the logic to train the selected materials
    const selectedMaterials = this.materials.filter(material => material.selected);
    console.log('Training the following materials:', selectedMaterials);
    // Add your training logic here
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
}