import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MdbCheckboxModule, MdbCarouselModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'desafio2';

  products = [
    {
      titulo: 'Producto 1',
      precio: 100,
      tipoEnvio: 'Gratis',
      imagen: 'https://media.istockphoto.com/id/1546442230/es/foto/productos-para-el-cuidado-de-la-piel-front-view-en-pieza-decorativa-de-madera.webp?b=1&s=170667a&w=0&k=20&c=cXgqBWf4fbjrdknqizm_67tkFw5Vp08MDyJeRyovkIc='
    },
    {
      titulo: 'Producto 2',
      precio: 200,
      tipoEnvio: 'Cobro en destino',
      imagen: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      titulo: 'Producto 3',
      precio: 300,
      tipoEnvio: 'Maritimo',
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      titulo: 'Producto 4',
      precio: 400,
      tipoEnvio: 'A convenir',
      imagen: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      titulo: 'Producto 5',
      precio: 500,
      tipoEnvio: 'Aereo',
      imagen: 'https://media.istockphoto.com/id/1495664030/es/foto/zapatillas-deportivas-sobre-fondo-de-hormig%C3%B3n-gris-oscuro-textura-de-la-vieja-piedra-oscura-o.webp?b=1&s=170667a&w=0&k=20&c=q9dEGc30mdE_rqVRTalTipACmdtTzx8cadHBVBRh8RQ='
    }
  ];
}
