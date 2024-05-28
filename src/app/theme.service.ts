import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = 'light';

  constructor() {
    this.loadTheme();
  }

  loadTheme() {
    const theme = localStorage.getItem('theme') || this.currentTheme;
    console.log("inside loadTheme:", theme);
    this.setTheme(theme);
  }

  setTheme(theme: string) {
    console.log("inside setTheme:", theme);
    this.currentTheme = theme;
    localStorage.setItem('theme', theme);

    const body = document.body;
    if (theme === 'dark') {
      console.log("inside dark");
      body.classList.remove('light-theme');
      body.classList.add('dark-theme');
    } else {
      console.log("inside light theme");
      body.classList.remove('dark-theme');
      body.classList.add('light-theme');
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    console.log("Toggle Theme:", this.currentTheme);
    this.setTheme(this.currentTheme);
  }
}
