import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}
  public getCats() {
    return this.firestore.collection('bar').doc("hoa").collection("canciones",ref => ref.orderBy("creacion","asc")).snapshotChanges()
  }
  obtenerCancionesDj(){
    return this.firestore.collection('bar').doc("hoa").collection("dj").doc("lista").collection("canciones",ref => ref.orderBy("creacion","asc")).snapshotChanges()
  }
  getClientes(){
    return this.firestore.collection('bar').doc("hoa").collection("users")
  }
  obtenerInfoUsuario(id){
    return this.firestore.collection('bar').doc("hoa").collection("users").doc(id).get()
  }

  obtenerEstadoServicio(){
      return this.firestore.collection('bar').doc("hoa").collection("modo").doc("dj").snapshotChanges()
    
  }

  cambiarEstadoServicio(val){
    return this.firestore.collection('bar').doc("hoa").collection("modo").doc("dj").update({activo:val})
  
}
}
