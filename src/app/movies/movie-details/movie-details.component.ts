import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {

  backgroundImageUrl: string = '';

  constructor() {
    // Example: You can fetch the image URL dynamically here
    this.backgroundImageUrl = 'https://wallpapercave.com/wp/wp13897935.jpg';
  }

}
