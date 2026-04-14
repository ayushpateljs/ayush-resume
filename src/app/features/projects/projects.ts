import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
   projects = [
    { name: 'Portfolio', desc: 'Modern Angular UI' },
    { name: 'Dashboard', desc: 'Admin analytics panel' }
  ];
}
