import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AlergenosService {

  private alergenosData: Observable<any>;

  constructor(private db: Firestore, private firestore: AngularFirestore) {
    this.alergenosData = this.firestore.collection('alergenos').valueChanges();
  }

  getListadoAlergenos(): Observable<any> {
    return this.alergenosData;
  }

  registrarDatosAlergenos(datosAlergenos: any) {
    return addDoc(collection(this.db, 'alergenos'),
      {
        nombre: datosAlergenos.nombre,
        descripcion: datosAlergenos.descripcion
      })
  }
}
