import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymService {
  constructor(private firestore: Firestore) {}

  getAllPersonals(): Observable<any[]> {
    const personalsCollection = collection(this.firestore, 'Personals');
    return collectionData(personalsCollection);
  }

  getAllPrograms(): Observable<any[]> {
    const programsCollection = collection(this.firestore, 'Programs');
    return collectionData(programsCollection);
  }
}

