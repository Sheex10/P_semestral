import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edcasagato',
  templateUrl: './edcasagato.page.html',
  styleUrls: ['./edcasagato.page.scss'],
})
export class EdcasagatoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
}
