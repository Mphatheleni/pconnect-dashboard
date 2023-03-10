import { EmployeeCheckIn } from '../models/EmployeeCheckIn';
import { AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import firebase from 'firebase/compat/app'
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CheckInService {


  private itemsCollection: AngularFirestoreCollection<EmployeeCheckIn>;

  private farmDoc!: AngularFirestoreDocument<EmployeeCheckIn>;
  employeeCheckIn!: Observable<EmployeeCheckIn>;
  constructor(private afs: AngularFirestore, private firestore: Firestore) {
    this.itemsCollection = afs.collection<EmployeeCheckIn>("organisations");

  }

  addFarm(employeeCheckIn: EmployeeCheckIn) {
    return this.itemsCollection.add(employeeCheckIn);
  }

  farms(): Observable<EmployeeCheckIn[]> {
    const booksRef = collection(this.firestore, 'organisations');
    return collectionData(booksRef, { idField: 'id' }) as Observable<EmployeeCheckIn[]>;
  }

  organizationCheckIns(): Observable<EmployeeCheckIn[]> {
    const booksRef = collection(this.firestore, 'organisations/oGcu3UbeRnb4oMkEnNmoQVZwEAh2/visits/RitcpxIoCMEMlDLnM89Q/guests');
    return collectionData(booksRef) as Observable<EmployeeCheckIn[]>;
  }

  organizationCheckInsTimestamps(): Observable<EmployeeCheckIn[]> {
    const booksRef = collection(this.firestore, 'organisations/oGcu3UbeRnb4oMkEnNmoQVZwEAh2/visits/');
    return collectionData(booksRef) as Observable<EmployeeCheckIn[]>;
  }

  organizationByTimestamps() {
    // const booksRef = collection(this.firestore, 'organisations/oGcu3UbeRnb4oMkEnNmoQVZwEAh2/visits/Dxxo34NxfpMuK6kp3xhX/guests');
    let comments$ = this.afs.collection('visits', ref => ref.where('timeStamp', '==', 'Mar 9, 2023'))
    .valueChanges().subscribe(val => {
      console.log(val)
    });

  }
  organizationCheckIns2(): Observable<EmployeeCheckIn[]> {
    const booksRef = collection(this.firestore, 'organisations/oGcu3UbeRnb4oMkEnNmoQVZwEAh2/visits/j7cpcusmSGVSRpW5bQc0/guests');

    return collectionData(booksRef) as Observable<EmployeeCheckIn[]>;
  }
}
