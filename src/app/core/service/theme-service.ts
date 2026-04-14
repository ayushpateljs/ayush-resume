import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
   private themeKey = 'theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    const current = localStorage.getItem(this.themeKey) || 'dark';
    const newTheme = current === 'dark' ? 'light' : 'dark';

    localStorage.setItem(this.themeKey, newTheme);
    this.applyTheme(newTheme);
  }

  loadTheme() {
    const saved = localStorage.getItem(this.themeKey) || 'dark';
    this.applyTheme(saved);
  }

  applyTheme(theme: string) {
    document.body.setAttribute('data-theme', theme);
  }
}
