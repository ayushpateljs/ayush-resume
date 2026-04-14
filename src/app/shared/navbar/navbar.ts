import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../core/service/theme-service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;
  constructor(private theme: ThemeService) {}
  

  toggleTheme() {
    this.theme.toggleTheme();
  }

//   // Add this to your navbar.component.ts
// closeMenu() {
//   const menu = document.getElementById('navMenu');
//   if (menu && menu.classList.contains('show')) {
//     menu.classList.remove('show');
//   }
// }

toggleMenu() {
  console.log("nnn");
  
  this.menuOpen = !this.menuOpen;
}

closeMenu() {
  this.menuOpen = false;
}
}
