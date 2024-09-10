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
  urls: string[] = [''];
  trainingMaterials: any[] = [];

  urlInput: string = '';
  // trainingMaterials = [];

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
  console.log(`Opening tab: ${tabName}`); // Use backticks for template literals
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


  addInputField() {
    this.urls.push('');
  }

  removeInputField(index: number) {
    this.urls.splice(index, 1);
  }

  // fetch link from step one to step 2

  addTrainingMaterial() {
    this.urls.forEach(url => {
      if (url) {
        this.trainingMaterials.push({
          url: url,
          type: 'Website URL', // Type of material
          characters: url.length, // Example: using URL length as characters count
          status: 'Untrained',
          lastTrained: 'Never'
        });
      }
    });

    // Clear the URL input fields after adding them to the table
    this.urls = [''];
  }

   // Function to handle re-training (example)
   retrainMaterial(material: any) {
    material.status = 'Re-trained';
    material.lastTrained = new Date().toLocaleDateString();
  }

  // Function to delete a material from the table
  deletematerial(material: any) {
    const index = this.trainingMaterials.indexOf(material);
    if (index > -1) {
      this.trainingMaterials.splice(index, 1);
    }
  }


  selectAll(): void {
    this.filteredMaterials.forEach(material => material.selected = true);
  }

  // retrain(material: any): void {

  //   console.log(Re-training ${material.name});
  // }

  // deletematerial(material: any): void {

  //   console.log(Deleting ${material.name});
  //   this.materials = this.materials.filter(m => m !== material);
  //   this.filterTrainingMaterials(); 
  // }


  trainSelected() {
    if (this.websiteUrl) {
      const newMaterial = {
        url: this.websiteUrl,
        type: 'Website URL', // Adjust this based on the active tab
        characters: this.websiteUrl.length,
        status: 'Pending',
        lastTrained: 'Never',
      };

      this.trainingMaterials.push(newMaterial);
      this.websiteUrl = ''; // Clear the input after adding
    }
  }
  

    // retrainMaterial(material) {
    //   // Logic to retrain the material
    //   material.status = 'Retrained';
    //   material.lastTrained = new Date().toLocaleString();
    // }
    
    // deleteMaterial(material: any) {
    //   this.trainingMaterials = this.trainingMaterials.filter(
    //     (m) => m !== material
    //   );
    // }




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
