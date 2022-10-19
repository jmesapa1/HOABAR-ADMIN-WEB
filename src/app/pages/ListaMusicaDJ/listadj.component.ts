import { ClienteService } from '../../services/cliente/cliente.service';
import { UtilsService } from '../../utils/utils.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import Chart from 'chart.js';
import { AngularFireDatabase } from '@angular/fire/database';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Properties } from 'src/app/Properties';
import { Console } from 'console';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-listadj",
  templateUrl: "listadj.component.html"
})
export class ListaDjComponent implements OnInit {
 
  cancionesClientes = []
  reproductorActivo = false
  closeResult: string;
  cambioSeleccion = false
  cancionSeleccionada
  modoDj
  constructor(private http: HttpClient, private router: Router, private firestoreService: FirestoreService, private route: ActivatedRoute, private utils: UtilsService, private clienteService: ClienteService, private alertService: AlertService, private modalService: NgbModal) {
    this.obtenerDevices()
  }

  ngOnInit() {
    this.obtenerCancionesSolicitadas()
    let me = this
    setInterval(X => {
     
          me.router.navigateByUrl("/inicio")
       
      }, 24000000);
  }

  obtenerCancionesSolicitadas() {
    this.cambioSeleccion = true
    this.firestoreService.getCats().subscribe((catsSnapshot) => {
      this.cambioSeleccion = true

      this.cancionesClientes = [];
      catsSnapshot.forEach((catData: any) => {
        let data = catData.payload.doc.data()
        let usersData = []
        console.log("esta es la data", data)
        if (data != undefined) {
          data.usuarios.forEach(usuario => {
            console.log(usuario)
            this.firestoreService.obtenerInfoUsuario(usuario).subscribe(resp => {
              console.log(resp)
              usersData.push(resp.data())
            })
          });
        }

        this.cancionesClientes.push({
          id: catData.payload.doc.id,
          uri: data.uri,
          date: new Date(data.creacion),
          data: data,
          usuarios: usersData
        });
      })

      console.log("cambio seleccion", this.cancionesClientes)

      setTimeout(r => {
        this.cambioSeleccion = false
      }, 5000)

    });
  }
  encolarCancion(cancion) {
    if (!this.modoDj) {
      this.http.post(Properties.URL + "/encolarcancion ", { canciones: [cancion] }).subscribe((resp: any) => {
        console.log(resp)
        this.alertService.crearMensaje("success", "La canción fue enviada exitosamente")
      }, error => {
        console.log(error.error)
        this.alertService.crearMensaje("error", error.error.message)
      })
    } else {
      this.http.post(Properties.URL + "/encolarcanciondj ", [cancion.data]).subscribe((resp: any) => {
        console.log(resp)
        this.alertService.crearMensaje("success", "La canción fue enviada exitosamente")
      }, error => {
        console.log(error.error)
        this.alertService.crearMensaje("error", error.error.message)
      })
    }

  }

  obtenerDevices() {

    this.obtenerCancionesSolicitadas()

  }

  enviarAcola() {
    this.http.post(Properties.URL + "/encolarcancion ", this.cancionesClientes).subscribe((resp: any) => {
      console.log(resp)
      this.alertService.crearMensaje("success", "Las canciónes fueron enviadas exitosamente")
    }, error => {
      console.log(error)
      this.alertService.crearMensaje("error", error.error.message)
      this.router.navigateByUrl("/inicio")
    })
  }

  eliminarCancion(cancion) {
    this.http.post(Properties.URL + "/eliminarcancion ", { id: cancion.id }).subscribe((resp: any) => {
      this.alertService.crearMensaje("success", "La canción fue eliminada exitosamente")
    })
  }

  verUsuarios(cancion, content) {
    this.cancionSeleccionada = cancion
    this.open(content)
  }

  open(content) {
    this.modalService.open(content, { backdropClass: 'light-blue-backdrop' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;

    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
