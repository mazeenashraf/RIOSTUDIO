import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  whatsappNumber = '201069427041';

  name = '';
  message = '';

  sendMessage() {

    const text = `Hello RIO Studio 👋

Name: ${this.name}
Message:
${this.message}`;

    const url =
      `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, '_blank');

  }

}
