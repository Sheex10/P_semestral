import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edjugueteperro',
  templateUrl: './edjugueteperro.page.html',
  styleUrls: ['./edjugueteperro.page.scss'],
})
export class EdjugueteperroPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
}
