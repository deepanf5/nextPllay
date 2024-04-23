import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ThemeService } from './services/theme.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,DropdownModule,FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'nextPlay';

  constructor(private themeServices: ThemeService) { }
  isExpanding = false;
  

  cities: City[] | undefined;

  selectedCity: City | undefined;

  theme: any

  ngOnInit() {
    this.cities = [
      { name: 'saga-green', code: 'NY' },
      { name: 'md-dark-indigo', code: 'RM' }
    ];
  }

  getTheme() {
    this.theme = this.selectedCity?.name
    this.themeServices.switchTheme(this.theme)
  }

}
