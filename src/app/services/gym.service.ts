import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { PersonalDTO } from '../models/personal.model';
import { ProgramDTO } from '../models/program.model';


@Injectable({
  providedIn: 'root',
})
export class GymService {
  constructor(private firestore: Firestore) {}

  getAllPersonals(): Observable<PersonalDTO[]> {
    const personalsCollection = collection(this.firestore, 'Personals');
    return collectionData(personalsCollection, { idField: 'id' }) as Observable<PersonalDTO[]>;
  }

  getAllPrograms(): Observable<ProgramDTO[]> {
    const programsCollection = collection(this.firestore, 'Programs');
    return collectionData(programsCollection, { idField: 'id' }) as Observable<ProgramDTO[]>;
  }
}

