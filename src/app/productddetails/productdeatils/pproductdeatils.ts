import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pproductdeatils.html',
  styleUrl: './pproductdeatils.css'
})
export class ProductDetailsComponent {

  // رقم الواتساب بصيغة دولية
  whatsappNumber = '201153393511';

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
      description: 'Fragrance Notes - Top Notes - Mint, Bergamot, Grapefruit, Lavender - Heart Notes - Granny Smith Apple, Cranberry, Rose -Base Notes - Cotton Flower, Aloe Vera, Amber -30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 3,
      name: 'Tygar Bvlgari',
      category: 'men',
      price: 350,
      description: ' Fragrance Notes - Top Notes - Grapefruit - Heart Notes - Ginger, Ambrette - Base Notes -  Ambroxan, Musk, Vetiver, Patchouli - 30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 4,
      name: 'Al Wisam Day Rasasi',
      category: 'men',
      price: 350,
      description: ' Fragrance Notes - Top Notes -  Fruity Notes, Cardamom - Heart Notes - Tonka Bean, Pineapple Blossom, Jasmine - Base Notes - Vanilla, Patchouli 30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 5,
      name: 'Madawi Gold Edition Arabian Oud',
      category: 'men',
      price: 300,
      description: 'Fragrance Notes - Top Notes - Fruity Notes, Cardamom -Heart Notes - Tonka Bean, Pineapple Blossom, Jasmine - Base Notes - Vanilla, Patchouli',
      image: '/collection/c1.jpeg'
    },

    {
      id: 6,
      name: 'Jawad Al Layl Khalis',
      category: 'men',
      price: 350,
      description: 'Fragrance Notes - Top Notes - Caramel, Vanilla, Citrus, Spicy Notes - Heart Notes - Oud, Floral Notes - Base Notes -Amber, Powdery Notes - 30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 7,
      name: 'Sauvage Elixir Dior',
      category: 'men',
      price: 300,
      description: 'Fragrance Notes - Top Notes - Nutmeg, Cinnamon, Cardamom, Grapefruit - Heart Notes -  Lavender - Base Notes -  Licorice, Sandalwood, Amber, Patchouli, Haitian Vetiver - 30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 8,
      name: 'Kayali Marshmallow',
      category: 'women',
      price: 320,
      description: 'Fragrance Notes - Top Notes -  Freesia, Italian Lemon, Nectarine Blossom, Apple - Heart Notes - Marshmallow, Strawberry, Coconut, Orange Blossom - Base Notes - Whipped Cream, Sugar, Vanilla, Musk, Raspberry, Ambroxan',
      image: '/collection/c1.jpeg'
    },

    {
      id: 9,
      name: 'Vanilla Powder Matiere Premiere',
      category: 'unisex',
      price: 330,
      description: 'Top Notes - Coconut Powder, Heliotrope - Heart Notes - Madagascar Vanilla - Base Notes - Vanilla, White Musk, Musk, Palo Santo, Coconut, Lactones - 30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 10,
      name: 'Burberry Her',
      category: 'women',
      price: 300,
      description: 'Fragrance Notes - Top Notes -  Strawberry, Raspberry, Blackberry, Sour Cherry, Blackcurrant, Mandarin Orange, Lemon - Heart Notes -  Violet, Jasmine - Base Notes - Musk, Vanilla, Cashmere Wood, Woody Notes, Amber, Oakmoss, Patchouli 30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 11,
      name: 'Baccarat Rouge 540',
      category: 'unisex',
      price: 300,
      description: 'Fragrance Notes - Top Notes - Saffron, Jasmine - Heart Notes - Amberwood, Ambergris, Hedione - Base Notes - Fir Resin, Cedarwood, Sugar, Ambroxan, Oakmoss  30 ML',
      image: '/collection/c1.jpeg'
    },

    {
      id: 12,
      name: 'Vanilla | 28 Kayali Fragrances',
      category: 'women',
      price: 320,
      description: 'Fragrance Notes - Top Notes -  Vanilla Orchid, Jasmine - Heart Notes - Brown Sugar, Tonka Bean - Base Notes - Amber, Amberwood, Musk, Patchouli 30 ML',
      image: '/collection/c1.jpeg'
    },
     {
      id: 13,
      name: 'Invictus Rabanne',
      category: 'men',
      price: 250,
      description: 'Top Notes - Sea Notes, Grapefruit, Mandarin Orange -  Heart Notes Bay Leaf, Jasmine - Base Notes - Ambergris, Guaiac Wood, Oakmoss, Patchouli',
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
      description: 'Fragrance Notes - Top Notes -  Pineapple, Grapefruit, Bergamot - Heart Notes - Cedarwood, Patchouli, Jasmine - Base Notes - Oakmoss, Woody Notes -30 ML',
      image: '/collection/c1.jpeg'
    }
  ];

  product: any;

  constructor(private route: ActivatedRoute) {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.products.find(p => p.id === id);

  }

  buyNow() {

    if (!this.product) return;

    const message =
`Hello,
I want to order:

Perfume: ${this.product.name}
Price: ${this.product.price} LE`;

    const url = `https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');

  }

}
