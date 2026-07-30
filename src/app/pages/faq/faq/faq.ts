import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class Faq {

  faqs = [



    {
      question: 'How long does shipping take?',
      answer: 'Shipping usually takes between 3 to 7 business days depending on your location.',
      open: false
    },

    {
      question: 'Can I return my order?',
      answer: 'Yes. Returns are accepted within 7 days if the product is unopened and in its original condition.',
      open: false
    },

    {
      question: 'How can I place an order?',
      answer: 'Simply open any perfume details page and click Buy Now to complete your order through WhatsApp.',
      open: false
    },

    {
      question: 'What payment methods are available?',
      answer: 'We accept payments via *InstaPay* and *Vodafone Cash*.',
      open: false
    },

    {
      question: 'How long do perfumes last?',
      answer: 'Most RIO perfumes last between 8 and 10 hours depending on skin type.',
      open: false
    }

  ];

  toggle(index: number) {

    this.faqs[index].open = !this.faqs[index].open;

  }

}
