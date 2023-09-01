import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editarperfil2',
  templateUrl: './editarperfil2.page.html',
  styleUrls: ['./editarperfil2.page.scss'],
})
export class Editarperfil2Page implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goTomenuadmin(){
    this.router.navigate(['/menuadmin'])
    
  }
}
