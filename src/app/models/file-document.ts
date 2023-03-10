import { Document } from "./document";

export class FileDocument extends Document {
  key: string;
  file: File;
  constructor(file: File) {
    super();
    this.file = file;
  }
}
