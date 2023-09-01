import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
    goTomenuadmin(){
      this.router.navigate(['/menuadmin'])
    }
  
    goToProductos(){
      this.router.navigate(['/editarpd'])
    }
  
    goTologin(){
      this.router.navigate(['/login'])
    }
    goToeditarperfil(){
      this.router.navigate(['/editarperfil'])
      
    }
}
