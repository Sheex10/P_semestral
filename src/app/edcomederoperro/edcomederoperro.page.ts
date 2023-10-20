import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-edcomederoperro',
  templateUrl: './edcomederoperro.page.html',
  styleUrls: ['./edcomederoperro.page.scss'],
})
export class EdcomederoperroPage implements OnInit {

  constructor(private router:Router, private bd: BdserviceService) { }

  ngOnInit() {
  }
  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
  goToproductoed() {
    this.router.navigate(['/productoed'])

  }
  eliminarProductoss(id:any){
    this.bd.eliminarProducto(id)
  }
}
