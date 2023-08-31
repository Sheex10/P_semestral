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
      "url": "/editarpd",
      "iconName": "cash-outline",
      "optionName": "Promociones"
    },
    {
      "url": "/editarpd",
      "iconName": "cash-outline",
      "optionName": "Promociones"
    },
    {
      "url": "/editarpd",
      "iconName": "cash-outline",
      "optionName": "Promociones"
    },
  ]
  }
  
}
