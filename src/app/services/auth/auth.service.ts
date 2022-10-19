import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public DOCS=[]
  constructor(private firestore: AngularFirestore,private router:Router) { 
  
  }

  ingresar(){

  }

  buscarCliente(nombre,correo, celular) :Observable<QuerySnapshot<unknown>>{
    return this.firestore.collection("users", ref => ref.where('celular', '==', celular) &&  ref.where('nombre', '==', nombre) && ref.where('correo', '==', correo)).get()
  }
  buscarClientePorId(){
   return  this.firestore.collection("users").get()
  }

  guardarUsuario(nombre,correo, celular) {
    let me=this
    return this.firestore.collection("users").add({celular:celular,nombre:nombre,correo:correo}).then(function(docRef) {
      me.firestore.collection("users").doc(docRef.id).set({celular:celular,nombre:nombre,correo:correo,id:docRef.id}).then(resp=>{
        localStorage.setItem("idUserHoa",docRef.id)
      })
    })
  }

  validarEstadoToken(){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function() {
      if(this.readyState === 4) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("GET", "https://api.spotify.com/v1/search?q=amanece&type=track");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    this.firestore.collection("TOKEN_AUTH").doc("token").get().forEach((x:any)=>{
      xhr.setRequestHeader("Authorization", "Bearer "+ x.data().access_token);
      xhr.send();
    })
    
    
    return xhr
  }

}
