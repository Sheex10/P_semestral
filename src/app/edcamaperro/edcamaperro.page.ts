import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edcamaperro',
  templateUrl: './edcamaperro.page.html',
  styleUrls: ['./edcamaperro.page.scss'],
})
export class EdcamaperroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
}
