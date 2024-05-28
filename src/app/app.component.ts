import { Component } from '@angular/core';
import { ThemeService } from './theme.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public themeService: ThemeService) {}
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  toggleTheme() {
     this.themeService.toggleTheme();
  }
}
