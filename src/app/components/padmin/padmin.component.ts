import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-padmin',
  templateUrl: './padmin.component.html',
  styleUrls: ['./padmin.component.scss'],
})
export class PadminComponent  implements OnInit {

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {}
  
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
