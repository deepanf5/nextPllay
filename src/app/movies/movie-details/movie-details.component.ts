import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [ButtonModule,CardModule,RatingModule,FormsModule,ReactiveFormsModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent {


  formGroup!: FormGroup;
  value = 3.5;

  ngOnInit() {
      this.formGroup = new FormGroup({
          value: new FormControl(4)
      });
  }

  backgroundImageUrl: string = '';

  constructor() {
    // Example: You can fetch the image URL dynamically here
    this.backgroundImageUrl = 'https://i.pinimg.com/originals/cc/b2/77/ccb2770cb8f3b743b0a3ee9da514790b.jpg';
  }

}
