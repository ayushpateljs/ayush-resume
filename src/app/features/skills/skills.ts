import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
   skills = [
    { name: 'Angular', desc: 'Modern SPA framework' },
    { name: 'TypeScript', desc: 'Strong typed JS' },
    { name: 'Bootstrap', desc: 'Responsive UI' }
  ];
}
