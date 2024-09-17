import { Component } from '@angular/core';
import { CardslidesComponent } from '../cardslides/cardslides.component';


@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ CardslidesComponent ],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
