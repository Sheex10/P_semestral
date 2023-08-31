import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edcamagato',
  templateUrl: './edcamagato.page.html',
  styleUrls: ['./edcamagato.page.scss'],
})
export class EdcamagatoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
  goToproductoed() {
    this.router.navigate(['/productoed'])

  }
}
