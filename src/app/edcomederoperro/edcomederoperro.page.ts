import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edcomederoperro',
  templateUrl: './edcomederoperro.page.html',
  styleUrls: ['./edcomederoperro.page.scss'],
})
export class EdcomederoperroPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
  goToproductoed() {
    this.router.navigate(['/productoed'])

  }
}
