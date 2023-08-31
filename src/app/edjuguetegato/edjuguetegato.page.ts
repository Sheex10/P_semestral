import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edjuguetegato',
  templateUrl: './edjuguetegato.page.html',
  styleUrls: ['./edjuguetegato.page.scss'],
})
export class EdjuguetegatoPage implements OnInit {

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
