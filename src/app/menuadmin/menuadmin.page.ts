import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {
  menuOpts: any;
  constructor(private router: Router,private menuCtrl: MenuController) { }

  ngOnInit() {
  this.menuOpts = [
    {
      "url": this.router.navigate(['/home']),
      "iconName": "home-outline",
      "optionName": "Inicio"
    },
    {
      "url": this.router.navigate(['/editarpd']),
      "iconName": "pricetags-outline",
      "optionName": "Productos"
    },
    {
      "url": this.router.navigate(['/login']),
      "iconName": "exit-outline",
      "optionName": "Cerrar sesión"
    },
  ]
  }
  
}
