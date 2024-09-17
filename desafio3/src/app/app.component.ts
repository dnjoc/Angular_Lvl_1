import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MatCardModule } from '@angular/material/card';
import { NgClass, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MdbCheckboxModule, MdbCarouselModule, MatCardModule, NgFor, NgIf, NgClass],
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
      imagen: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
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
      imagen: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
    },
    {
      titulo: 'Producto 5',
      precio: 500,
      tipoEnvio: 'Aereo',
      imagen: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  objetos = [
    {
      nombre: 'Cremas blancas',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 90,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://media.istockphoto.com/id/1546442230/es/foto/productos-para-el-cuidado-de-la-piel-front-view-en-pieza-decorativa-de-madera.webp?b=1&s=170667a&w=0&k=20&c=cXgqBWf4fbjrdknqizm_67tkFw5Vp08MDyJeRyovkIc='
    },
    {
      nombre: 'Zapato gris',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 100,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://media.istockphoto.com/id/1495664030/es/foto/zapatillas-deportivas-sobre-fondo-de-hormig%C3%B3n-gris-oscuro-textura-de-la-vieja-piedra-oscura-o.webp?b=1&s=170667a&w=0&k=20&c=q9dEGc30mdE_rqVRTalTipACmdtTzx8cadHBVBRh8RQ='
    },
    {
      nombre: 'Cremas negras',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 120,
      tipoEnvio: 'Cobro en destino',
      imagenUrl: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D'
    },
    {
      nombre: 'Zapato rojo',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 50,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      nombre: 'Cremas azul',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 160,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      nombre: 'Cremas gris',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 75,
      tipoEnvio: 'Cobro en destino',
      imagenUrl: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
    },
    {
      nombre: 'Zapato negro',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 200,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
    },
    {
      nombre: 'Cremas multicolor',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 150,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
    },
    {
      nombre: 'Zapato multicolor',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 150,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
    },
  {
    nombre: 'Reloj blanco',
    descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    precio: 150,
    tipoEnvio: 'Cobro en destino',
    imagenUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
  },
  ];

  selectedProducto: any;

selectProducto(producto: any) {
  if (this.selectedProducto == producto) {
    this.selectedProducto = null;
  } else{
    this.selectedProducto = producto;
  }
}
}
