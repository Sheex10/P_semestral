import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edcomederogato',
  templateUrl: './edcomederogato.page.html',
  styleUrls: ['./edcomederogato.page.scss'],
})
export class EdcomederogatoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
}
