import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  razas: any[] = [];

  constructor(private router: Router, public api: ApiserviceService) { }

  ngOnInit(){

  }

  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
  obtenerRazas(): void {
    this.api.getRazas().subscribe((data) =>{
      this.razas = data.results;
    })
  }

}