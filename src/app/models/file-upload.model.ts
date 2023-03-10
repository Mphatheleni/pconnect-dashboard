export class FileUpload {
    key!: string;
    name!: string;
    url!: string;
    file: File;
    mimeType: string
  
    constructor(file: File) {
      this.file = file;
    }
  }