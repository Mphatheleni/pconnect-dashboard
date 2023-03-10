import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Farm } from '../models/EmployeeCheckIn';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

// const app = initializeApp({ environment.firebase });
// const firestore = getFirestore(app);
@Injectable({
  providedIn: 'root'
})
export class FarmService {

  private itemsCollection: AngularFirestoreCollection<Farm>;

  private farmDoc: AngularFirestoreDocument<Farm>;
  farm: Observable<Farm>;
  constructor(private afs: AngularFirestore,private firestore: Firestore) {
    this.itemsCollection = afs.collection<Farm>("farms");

  }

  addFarm(farm: Farm) {
   return this.itemsCollection.add(farm);
  }
  farms(): Observable<Farm[]> {
    const booksRef = collection(this.firestore, 'farms');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Farm[]>;
  }
  farmsRegRequests(): Observable<Farm[]> {
    const booksRef = collection(this.firestore, 'farmRegRequest');
    return collectionData(booksRef, { idField: 'id' }) as Observable<Farm[]>;
  }
  addfarmsregRequest(farm: Farm) {
    this.itemsCollection = this.afs.collection<Farm>("farmRegRequest");
      this.itemsCollection.add(farm);
  }
  addRejectedFarm(farm: Farm) {
    this.itemsCollection = this.afs.collection<Farm>("rejectedFarms");
      return this.itemsCollection.add(farm);
  }
  deleteFarm( id: string) {
    console.log(id)
    const bookDocRef = doc(this.firestore, `farmRegRequest/${id}`);

    return deleteDoc(bookDocRef)
  }
}
