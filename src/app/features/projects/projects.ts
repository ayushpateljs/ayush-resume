import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  //  projects = [
  //   { name: 'Portfolio', desc: 'Modern Angular UI' },
  //   { name: 'Dashboard', desc: 'Admin analytics panel' }
  // ];

   categories = signal(['All', 'Angular', 'Node.js', 'React.js', 'Full Stack', 'Web Dev']);
  activeCategory = signal('All');

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
