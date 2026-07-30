import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = [

 {
      id: 1,
      name: 'Bois Impérial Essential Parfums',
      category: 'men',
      price: 420,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 2,
      name: 'Tommy Hilfiger',
      category: 'men',
      price: 300,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 3,
      name: 'Tygar Bvlgari',
      category: 'men',
      price: 350,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 4,
      name: 'Al Wisam Day Rasasi',
      category: 'men',
      price: 350,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 5,
      name: 'Madawi Gold Edition Arabian Oud',
      category: 'men',
      price: 300,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 6,
      name: 'Jawad Al Layl Khalis',
      category: 'men',
      price: 350,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 7,
      name: 'Sauvage Elixir Dior',
      category: 'men',
      price: 300,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 8,
      name: 'Kayali Marshmallow',
      category: 'women',
      price: 320,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 9,
      name: 'Vanilla Powder Matiere Premiere',
      category: 'unisex',
      price: 330,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 10,
      name: 'Burberry Her',
      category: 'women',
      price: 300,
      description: ' 30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 11,
      name: 'Baccarat Rouge 540',
      category: 'unisex',
      price: 300,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 12,
      name: 'Vanilla | 28 Kayali Fragrances',
      category: 'women',
      price: 320,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },
 {
      id: 13,
      name: 'Invictus Rabanne',
      category: 'men',
      price: 250,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },
    {
      id: 14,
      name: 'Pacific Chill Louis Vuitton',
      category: 'men',
      price: 450,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },
    {
      id: 15,
      name: 'Valaya Exclusif Parfums de Marly',
      category: 'women',
      price: 330,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    },
    {
      id: 16,
      name: 'Hacivat Nishane',
      category: 'men',
      price: 350,
      description: '30 ML',
      image: '/collection/c1.jpeg'
    }


  ];

  constructor() {}

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }

}
