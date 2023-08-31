import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productoed',
  templateUrl: './productoed.page.html',
  styleUrls: ['./productoed.page.scss'],
})
export class ProductoedPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
}
