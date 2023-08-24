import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(private router: Router) {}

  goToInicio(){
    this.router.navigate(['/home'])
  }

  goToPerros(){
    this.router.navigate(['/perros'])
  }

  goToGatos(){
    this.router.navigate(['/gatos'])
  }

  goToCuenta(){
    this.router.navigate(['/cuenta'])
  }
}
