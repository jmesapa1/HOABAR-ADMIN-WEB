import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'
import { Properties } from 'src/app/Properties';
import { AlertService } from 'src/app/services/alert/alert.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  constructor(private router:Router,private location:Location,private route:ActivatedRoute,private http:HttpClient,private alertService:AlertService  ,   ) { 

    console.log("OBTENER TOKEN")
    /*console.log( this.route.snapshot.paramMap.get('token'))*/
  }

  ngOnInit(): void {
    this.route.url.subscribe(params => {

        let code=params["code"]
        let urlData= this.location.path(true).split("token?code=")[1]
      let arrayData=urlData.split("&")
      console.log(arrayData)
      
        if(arrayData.length!=1 ){
          //this.router.navigateByUrl("login")
        }else{
          let raw={token:arrayData[0]}
          console.log(raw)
          this.http.post(Properties.URL+"/capturartoken",raw).subscribe((resp:any)=>{
            console.log(resp)
            if(resp.success){
              this.router.navigateByUrl("landing/lista")

            }
          },error=>{
            //this.router.navigateByUrl("login")
            this.alertService.crearMensaje("success","Error, Asegurate de que la música este sonando")
          })
        }
        

    });

  }

}
