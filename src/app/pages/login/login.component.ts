import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;



  constructor(private router:Router,private alertService:AlertService  ,       private _formBuilder: FormBuilder,
    public afAuth: AngularFireAuth,) { }

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email     : ['', [Validators.required, Validators.email]],
      password  : ['', Validators.required], 
  }
);
  }

  ingresar(){
    console.log(this.loginForm.value.email,this.loginForm.value.password)
    this.afAuth.signInWithEmailAndPassword(this.loginForm.controls.email.value,this.loginForm.controls.password.value).then(resp=>{
      this.alertService.crearMensaje("success","Iniciaste sesión")

      localStorage.setItem("adminUserHoa","true")
      this.router.navigateByUrl("inicio")
    }).catch(error=>{
      this.alertService.crearMensaje("error","Correo o contraseña invalida")

    })
 
  }

}
