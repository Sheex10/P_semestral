import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-editarpd',
  templateUrl: './editarpd.page.html',
  styleUrls: ['./editarpd.page.scss'],
})
export class EditarpdPage implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  goToedcamaperro(){
    this.router.navigate(['/edcamaperro'])
    
  }

  goToedcasaperro(){
    this.router.navigate(['/edcasaperro'])
    
  }

  goToedcomederoperro(){
    this.router.navigate(['/edcomederoperro'])
    
  }

  goToedjugueteperro(){
    this.router.navigate(['/edjugueteperro'])
    
  }
  goToedcamagato(){
    this.router.navigate(['/edcamagato'])
    
  }

  goToedcasagato(){
    this.router.navigate(['/edcasagato'])
    
  }

  goToedcomederogato(){
    this.router.navigate(['/edcomederogato'])
    
  }

  goToedjuguetegato(){
    this.router.navigate(['/edjuguetegato'])
    
  }
}


