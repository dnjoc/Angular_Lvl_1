import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [ NgIf, NgClass, RouterLink ],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent implements OnInit {
  productos = [
    {
      nombre: 'Cremas blancas',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 90,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://media.istockphoto.com/id/1546442230/es/foto/productos-para-el-cuidado-de-la-piel-front-view-en-pieza-decorativa-de-madera.webp?b=1&s=170667a&w=0&k=20&c=cXgqBWf4fbjrdknqizm_67tkFw5Vp08MDyJeRyovkIc=',
      id: 1,
      ubicacion: "Barquisimeto, Lara",
      categorias: {
        categoria1: 'Estética y Belleza',
        categoria2: 'Cuidado de la Piel',
        categoria3: 'Cuidado Corporal'
      },
      intereses: "corrector de ojeras - polvo suelto - polvo compacto - base de maquillaje - crema humectante",
      ventas: 20,
      color: "Blanco",
      unidad: 8,
      opinion: 60
    },
    {
      nombre: 'Zapato gris',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 100,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://media.istockphoto.com/id/1495664030/es/foto/zapatillas-deportivas-sobre-fondo-de-hormig%C3%B3n-gris-oscuro-textura-de-la-vieja-piedra-oscura-o.webp?b=1&s=170667a&w=0&k=20&c=q9dEGc30mdE_rqVRTalTipACmdtTzx8cadHBVBRh8RQ=',
      id: 2,
      ubicacion: "Cabudare, Lara",
      categorias: {
        categoria1: 'Ropa, Zapatos y Accesorios',
        categoria2: 'Calzado',
        categoria3: 'Zapatos'
      },
      intereses: "zapatillas - zapatillas damaza - patillas de ballet - zapato para dama negro - zapatillas de dama",
      ventas: 50,
      color: "Gris",
      unidad: 34,
      opinion: 50
    },
    {
      nombre: 'Cremas negras',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 120,
      tipoEnvio: 'Cobro en destino',
      imagenUrl: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
      id: 3,
      ubicacion: "Cua, Miranda",
      categorias: {
        categoria1: 'Estética y Belleza',
        categoria2: 'Cuidado de la Piel',
        categoria3: 'Cuidado Corporal'
      },
      intereses: "corrector de ojeras - polvo suelto - polvo compacto - base de maquillaje - crema humectante",
      ventas: 200,
      color: "Negro",
      unidad: 87,
      opinion: 334
    },
    {
      nombre: 'Zapato rojo',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 50,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      id: 4,
      ubicacion: "La Guaira, Caracas",
      categorias: {
        categoria1: 'Ropa, Zapatos y Accesorios',
        categoria2: 'Calzado',
        categoria3: 'Zapatos'
      },
      intereses: "zapatillas - zapatillas damaza - patillas de ballet - zapato para dama negro - zapatillas de dama",
      ventas: 60,
      color: "Rojo",
      unidad: 23,
      opinion: 34
    },
    {
      nombre: 'Cremas azul',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 160,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      id: 5,
      ubicacion: "Merida, Merida",
      categorias: {
        categoria1: 'Estética y Belleza',
        categoria2: 'Cuidado de la Piel',
        categoria3: 'Cuidado Corporal'
      },
      intereses: "corrector de ojeras - polvo suelto - polvo compacto - base de maquillaje - crema humectante",
      ventas: 10,
      color: "Azul",
      unidad: 38,
      opinion: 20
    },
    {
      nombre: 'Cremas gris',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 75,
      tipoEnvio: 'Cobro en destino',
      imagenUrl: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 6,
      ubicacion: "Barquisimeto, Lara",
      categorias: {
        categoria1: 'Estética y Belleza',
        categoria2: 'Cuidado de la Piel',
        categoria3: 'Cuidado Corporal'
      },
      intereses: "corrector de ojeras - polvo suelto - polvo compacto - base de maquillaje - crema humectante",
      ventas: 90,
      color: "Gris",
      unidad: 70,
      opinion: 4
    },
    {
      nombre: 'Zapato negro',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 200,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 7,
      ubicacion: "Maracaibo, Zulia",
      categorias: {
        categoria1: 'Ropa, Zapatos y Accesorios',
        categoria2: 'Calzado',
        categoria3: 'Zapatos'
      },
      intereses: "zapatillas - zapatillas damaza - patillas de ballet - zapato para dama negro - zapatillas de dama",
      ventas: 120,
      color: "Negro",
      unidad: 193,
      opinion: 34
    },
    {
      nombre: 'Cremas multicolor',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 150,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 8,
      ubicacion: "Maracay, Aragua",
      categorias: {
        categoria1: 'Estética y Belleza',
        categoria2: 'Cuidado de la Piel',
        categoria3: 'Cuidado Corporal'
      },
      intereses: "corrector de ojeras - polvo suelto - polvo compacto - base de maquillaje - crema humectante",
      ventas: 178,
      color: "Multicolor",
      unidad: 322,
      opinion: 23
    },
    {
      nombre: 'Zapato multicolor',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 150,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 9,
      ubicacion: "Valencia, Carabobo",
      categorias: {
        categoria1: 'Ropa, Zapatos y Accesorios',
        categoria2: 'Calzado',
        categoria3: 'Zapatos'
      },
      intereses: "zapatillas - zapatillas damaza - patillas de ballet - zapato para dama negro - zapatillas de dama",
      ventas: 304,
      color: "Variado",
      unidad: 234,
      opinion: 4
    },
  {
    nombre: 'Reloj blanco',
    descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    precio: 150,
    tipoEnvio: 'Cobro en destino',
    imagenUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3,D',
    id: 10,
    ubicacion: "Barquisimeto, Lara",
    categorias: {
      categoria1: 'Relojes, Joyas y Bisutería',
      categoria2: 'Relojes',
      categoria3: 'Relojes Pulsera'
    },
    intereses: "reloj swatch dama - reloj omega - skmei reloj - reloj invicta - citizen - reloj freestyle - richard mille",
      ventas: 235,
      color: "Blanco",
      unidad: 343,
      opinion: 7
  }
  ];

  product: any;


 constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      this.product = this.productos.find(p => p.id == id);
      console.log(this.product);
      console.log(this.productos);

    });
  }
}
