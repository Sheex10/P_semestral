import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BdserviceService } from './services/bdservice.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router: Router,private menuCtrl: MenuController, private bd: BdserviceService) {
    
  }

  goToInicio(){
    this.router.navigate(['/home'])
    
  }

  goToPerros(){
    this.router.navigate(['/perros'])
    this.menuCtrl.close('end');
    
  }

  goToGatos(){
    this.router.navigate(['/gatos'])
  }

  goToCuenta(){
    this.router.navigate(['/cuenta'])
  }
  
  goTologin() {
    this.router.navigate(['/login'])
    this.bd.vaciarTablaUsu();
  }

}
