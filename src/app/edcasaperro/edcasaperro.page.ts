import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edcasaperro',
  templateUrl: './edcasaperro.page.html',
  styleUrls: ['./edcasaperro.page.scss'],
})
export class EdcasaperroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
}
