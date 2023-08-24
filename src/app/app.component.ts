import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router: Router,private menuCtrl: MenuController) {
    
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
}
