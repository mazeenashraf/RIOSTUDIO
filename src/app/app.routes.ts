
import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home/home').then(m => m.Home),
    title: 'Home'
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about').then(m => m.About),
    title: 'About'
  },

  {
    path: 'shop',
    loadComponent: () =>
      import('./pages/shop/shop/shop').then(m => m.Shop),
    title: 'Shop'
  },

  {
    path: 'faq',
    loadComponent: () =>
      import('./pages/faq/faq/faq').then(m => m.Faq),
    title: 'Faq'
  },

  {
    path: 'collection',
    loadComponent: () =>
      import('./pages/collections/collections/collections').then(m => m.CollectionComponent),
    title: 'Collection'
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact/contact').then(m => m.Contact),
    title: 'Contact Us'
  },

  {
    path: 'product/:id',
    loadComponent: () =>
      import('./productddetails/productdeatils/pproductdeatils').then(m => m.ProductDetailsComponent),
    title: 'Product Details'
  },

  {
    path: '**',
    redirectTo: 'home'
  }

];
