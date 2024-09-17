import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, AfterViewInit, OnInit } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Swiper } from 'swiper';
import { register } from "swiper/element/bundle";

register()

@Component({
  selector: 'app-cardslides',
  standalone: true,
  imports: [ NgClass, NgFor, NgIf ],
  templateUrl: './cardslides.component.html',
  styleUrl: './cardslides.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CardslidesComponent implements AfterViewInit, OnInit {


  products = [
    {
      titulo: 'Ingresa a tu cuenta',
      boton: 'Ingresa a tu cuenta',
      descripcion: 'Disfruta de ofertas y compra sin limites',
      imagen: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/registration-da.svg'
    },
    {
      titulo: 'Tiendas oficiales',
      boton: 'Mostrar tiendas',
      descripcion: 'Encuentra tus marcas preferidas',
      imagen: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/store-official.svg'
    },
    {
      titulo: 'Zapatillas',
      boton: 'Buscar Zapatillas',
      descripcion: 'Encuentra el estilo que se adapta a ti',
      imagen: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/shoes-category.svg'
    },
    {
      titulo: 'Celulares y telefonos',
      boton: 'Ir a Celulares',
      descripcion: 'A convenir',
      imagen: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/cellphones-category.svg'
    },
    {
      titulo: 'Nuestras categorias',
      boton: 'Ir a Categorias',
      descripcion: 'Encuentra celulares, ropa, inmuebles y mas',
      imagen: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/categories.svg'
    },
    {
      titulo: 'Recibe tus compras',
      boton: 'Como recibir o retirar',
      descripcion: 'Puedes recibirlas en tu casa o retirarlas',
      imagen: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/buy-protected.svg'
    },
    {
    titulo: '¿Necesitas ayuda?',
      boton: 'Ir a Ayuda',
      descripcion: 'Resuelve tus dudas sobre compras o ventas',
      imagen: 'https://http2.mlstatic.com/frontend-assets/homes-palpatine/dynamic-access-desktop/help-da.svg'
    }
  ];

  objetos = [
    {
      nombre: 'Cremas blancas',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 90,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://media.istockphoto.com/id/1546442230/es/foto/productos-para-el-cuidado-de-la-piel-front-view-en-pieza-decorativa-de-madera.webp?b=1&s=170667a&w=0&k=20&c=cXgqBWf4fbjrdknqizm_67tkFw5Vp08MDyJeRyovkIc=',
      id: 1
    },
    {
      nombre: 'Zapato gris',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 100,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://media.istockphoto.com/id/1495664030/es/foto/zapatillas-deportivas-sobre-fondo-de-hormig%C3%B3n-gris-oscuro-textura-de-la-vieja-piedra-oscura-o.webp?b=1&s=170667a&w=0&k=20&c=q9dEGc30mdE_rqVRTalTipACmdtTzx8cadHBVBRh8RQ=',
      id: 2
    },
    {
      nombre: 'Cremas negras',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 120,
      tipoEnvio: 'Cobro en destino',
      imagenUrl: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
      id: 3
    },
    {
      nombre: 'Zapato rojo',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 50,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      id: 4
    },
    {
      nombre: 'Cremas azul',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 160,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D',
      id: 5
    },
    {
      nombre: 'Cremas gris',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 75,
      tipoEnvio: 'Cobro en destino',
      imagenUrl: 'https://images.unsplash.com/photo-1627384113743-6bd5a479fffd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 6
    },
    {
      nombre: 'Zapato negro',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 200,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 7
    },
    {
      nombre: 'Cremas multicolor',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 150,
      tipoEnvio: 'Acordado con el cliente',
      imagenUrl: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 8
    },
    {
      nombre: 'Zapato multicolor',
      descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      precio: 150,
      tipoEnvio: 'Gratis',
      imagenUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D',
      id: 9
    },
  {
    nombre: 'Reloj blanco',
    descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    precio: 150,
    tipoEnvio: 'Cobro en destino',
    imagenUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3,D',
    id: 10
  }
  ];

  constructor(private router: Router) {}

  showProductDetails(id: number) {
    this.router.navigate(['/descripcion', id]);
  }

  selectedProductos: any;

  ultimaVista: any =  {
    nombre: 'Cremas blancas',
    descripcion: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    precio: 90,
    tipoEnvio: 'Gratis',
    imagenUrl: 'https://media.istockphoto.com/id/1546442230/es/foto/productos-para-el-cuidado-de-la-piel-front-view-en-pieza-decorativa-de-madera.webp?b=1&s=170667a&w=0&k=20&c=cXgqBWf4fbjrdknqizm_67tkFw5Vp08MDyJeRyovkIc=',
    id: 10
  }



selectProductos(producto: any) {
  console.log(producto);
  if (this.selectedProductos == producto) {
    this.selectedProductos = null;
  } else{
    this.selectedProductos = producto;
    this.ultimaVista = producto;
  }
}

swiperParams1 = {
  slidesPerView: 2,
  480: {
    slidesPerView: 2,
    spaceBetween: 5
  },
  640: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  947: {
    slidesPerView: 4,
    spaceBetween: 40
  },
  1040: {
    slidesPerView: 5,
    spaceBetween: 10
  },
};
ngOnInit(): void {

};

 ngAfterViewInit(): void {
    const swiperEl = document.querySelectorAll('swiper-container');
  if (swiperEl) {
    Object.assign(swiperEl, this.swiperParams1);
  }

  }

}
