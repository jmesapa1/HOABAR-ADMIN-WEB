import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Properties } from 'src/app/Properties';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get(Properties.URL+"/obtenerurl").subscribe((resp:any)=>{
      window.open(resp.data,"_self")
      localStorage.setItem("adminUserHoa","true")
    })
  }

}
