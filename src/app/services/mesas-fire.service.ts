import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { InvitadoData, MesaData } from '../interfaces/datos.interfaces';
import { Firestore, addDoc, writeBatch } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class MesasFireService {

  private mesasHeroesData: Observable<MesaData[]>;
  private invitadosData: Observable<InvitadoData[]>;

  constructor(
    private firestore: AngularFirestore,
    private db: Firestore
  ) { 
    this.mesasHeroesData = this.firestore.collection<MesaData>('heroes').valueChanges()
    this.invitadosData = this.firestore.collection<InvitadoData>('invitados').valueChanges()
  }

  getMesasHeroesData(): Observable<MesaData[]> {
    return this.mesasHeroesData;
  }
  
  saveInvitados(vInvitados: InvitadoData[]) {
    const promesasInvitados: Promise<any>[] = [];
    vInvitados.forEach( (invitado: InvitadoData) => promesasInvitados.push(this.saveInvitado(invitado)))
    return Promise.all(promesasInvitados);
  }

  saveInvitado(invitado: InvitadoData) {
    return addDoc(collection(this.db, 'invitados'), invitado);
  }

  getVInvitados(): Observable<InvitadoData[]> {
    return this.invitadosData;
  }
}
