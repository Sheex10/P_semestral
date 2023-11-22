import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiserviceService } from '../services/apiservice.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  users: any[] = [];

  constructor(private router: Router, public api: ApiserviceService, private http: HttpClientModule) { }

  ngOnInit(){
    this.obtenerRazas();
  }

  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
  obtenerRazas(): void {
    this.api.getData().subscribe((data) =>{
      this.users = data;
    })
  }

}