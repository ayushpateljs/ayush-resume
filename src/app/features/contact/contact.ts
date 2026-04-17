import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
 infoCards = [
  {
    title: 'Currently Available',
    desc: 'Open for projects & roles',
    color: 'green'
  },
  {
    title: 'Response Time',
    desc: 'Within 24 hours',
    color: 'blue'
  },
  {
    title: 'Works Worldwide',
    desc: 'Available globally',
    color: 'purple'
  }
];

form = {
  name: '',
  email: '',
  message: ''
};

sendWhatsApp() {

  if (!this.form.name || !this.form.email) {
    alert("Please fill required fields");
    return;
  }

  const phoneNumber = '918083106697'; // 👉 YOUR NUMBER

  const text =
`Hello Ayush,

Name: ${this.form.name}
Email: ${this.form.email}

Message:
${this.form.message}`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank');
}
}
