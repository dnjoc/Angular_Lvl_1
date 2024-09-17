import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page404',
  standalone: true,
  imports: [],
  templateUrl: './page404.component.html',
  styleUrl: './page404.component.css'
})
export class Page404Component {
    constructor(public router: Router){
      setTimeout(() => {
        this.router.navigate(['/principal']);
      },5000)
    }
  }
