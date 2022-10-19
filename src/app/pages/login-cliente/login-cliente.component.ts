import { ClienteService } from './../../services/cliente/cliente.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AngularFireAuth } from '@angular/fire/auth';
import * as auth from "firebase/auth"
import * as firebase from 'firebase';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.scss']
})
export class LoginClienteComponent implements OnInit {
  modalRef: BsModalRef;

  nombre=""
  correo=""
  celular=""
  constructor( private modalService: BsModalService,private router:Router) {
    try{
     if(localStorage.getItem("idUserHoa")!=null){
      this.navegarLista() 
     }
    }catch(e){
      console.log(e)
    }
  }

  ngOnInit(): void {
  }
  
 

 
  navegarLista() {
    this.router.navigate(["/landing/lista"])
}

  printError(event) {
      console.error(event);
  }

  

}
