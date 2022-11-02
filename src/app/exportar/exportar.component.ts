import { Component, OnInit } from '@angular/core';
import * as xlsx from "xlsx";
import { FirestoreService } from '../services/firestore/firestore.service';

@Component({
  selector: 'app-exportar',
  templateUrl: './exportar.component.html',
  styleUrls: ['./exportar.component.scss']
})
export class ExportarComponent implements OnInit {
 array=[]
  constructor(private firestoreService: FirestoreService) {

    this.firestoreService.getClientes().get().subscribe(r => {
      this.array=[]
      r.docs.forEach(x => {
        console.log(x.data())
        let data=x.data()
        this.array.push(data)
      }

      )
    })

    setTimeout(x=>{
      this.exportToExcel()
    },5000)


  }



  exportToExcel() {
    let newArray: any[] = [];
    let dataSourceTable = []
    let data = Object.values(this.array);

    Object.keys(data).forEach((key, index) => {

      let mensaje=  "🌟HOA BAR🌟\r\n"+

      data[key].nombre+" llego el momento🕥 de venir y perrear en Halloween, busca tu mejor disfraz🎅 y démosle hasta abajo.🎶 \r\n"+
    
      "Mostrando este mensaje📨 recibirás un THE BIG BOSS de cortesía en HOA BAR\r\n\r\n"+

      "@HOA.BAR"
      let celular=""
      if(data[key].celular.substring(0,2)!="57" && data[key].celular.length===10){
        console.log("HAY QUE PONERLE 57",data[key].celular)
         celular="57"+data[key].celular
      }else{
        celular=data[key].celular

      }
    
      let principal = {
        "Telefonos": celular,
        "Mensaje": mensaje,
      }

      newArray.push(principal);
    });

    const ws: xlsx.WorkSheet = xlsx.utils.json_to_sheet(newArray);

    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, "Sheet1");
    let date = new Date();
    xlsx.writeFile(
      wb,

      "USUARIOS-HOA" + date.getFullYear() + date.getMonth() + "" + date.getDate() + ".xlsx"
    );

  }
  ngOnInit(): void {
  }

}
