import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { MoviesService } from '../services/movie/movies.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';

import { PlayMovieComponent } from '../play-movie/play-movie.component';

// declare var videojs: any;

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
    RouterModule,
    DynamicDialogModule
    
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
  providers: [DialogService]
  
})
export class MovieDetailsComponent implements OnInit{
  formGroup!: FormGroup;
  value = 3.5;
  playIcon = faPlay;
  movie:any;
  watchMovie:boolean = false;
  public video!: HTMLVideoElement;
  public player!: any;
  ref: DynamicDialogRef | undefined;
  @ViewChild('videoElement') videoElement!: ElementRef;
  

  constructor(private moviesServices:MoviesService,public dialogService: DialogService) {
     this.movie =  this.moviesServices.movieDetail();

  }
 



  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value: new FormControl(4)
  });  
}


ngOnDestroy(): void {

}


show() {
  this.ref = this.dialogService.open(PlayMovieComponent, { 
      data: {
          id: '51gF3'
      },
      header: `${this.movie.title}`,
      width: '100%',
            contentStyle: { overflow: 'hidden' },
            baseZIndex: 1000,
            
  });
}


 
}
