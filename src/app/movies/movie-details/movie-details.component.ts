import { Component, OnInit, effect } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { MoviesService } from '../services/movie/movies.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
    ButtonModule,
    CardModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  formGroup!: FormGroup;
  value = 3.5;
  playIcon = faPlay

  movie:any;

  constructor(private moviesServices:MoviesService) {
     this.movie =  this.moviesServices.movieDetail();
     console.log(this.movie.poster)

  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value: new FormControl(4)
  });
}


 
}
