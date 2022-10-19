import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "lista",
    title: "Solicitudes Musica",
    rtlTitle: "لوحة القيادة",
    icon: "icon-headphones",
    class: ""
  },
 /* {
    path: "votaciones",
    title: "Votaciones",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: ""
  },*/
  
  
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private router:Router) {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  cerrarSesion(){
    localStorage.removeItem("adminUserHoa")
    this.router.navigateByUrl("login")
  }
}
