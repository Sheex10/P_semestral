import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';


@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {

  users: any[] = [];
  
  constructor(private router: Router, public api: ApiserviceService, private http: HttpClientModule, private activatedRouter:ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.obtenerRazas();
  }

  goToCuenta() {
    this.router.navigate(['/cuenta'])
  }

  goToeditPd() {
    this.router.navigate(['/editarpd'])
  }

  goTologin() {
    this.router.navigate(['/login'])
  }

  goToeditarperfil2() {
    this.router.navigate(['/editarperfil2'])
  }

  goToAddPd(){
    this.router.navigate(['/agregar-producto'])
  }
  
  obtenerRazas(): void {
    this.api.getData().subscribe((data) =>{
      this.users = data;
    })
  }
}
