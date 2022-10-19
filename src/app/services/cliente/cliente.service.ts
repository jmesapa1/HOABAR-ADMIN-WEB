import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient,private firestore: AngularFirestore) { }

  obtenerReproductor():Observable<any>{
    return this.firestore.collection("reproductor").doc("reproductor_principal").valueChanges()
  }
  obtenerCancionesVotacion():Observable<Action<DocumentSnapshot<unknown>>>{
    return this.firestore.collection("Servicio").doc("usuarios").snapshotChanges()
  }

}
