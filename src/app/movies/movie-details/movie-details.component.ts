import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { MoviesService } from '../services/movie/movies.service';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

declare var videojs: any;

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
    SidebarModule,
    
  ],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit, AfterViewInit, OnDestroy{
  formGroup!: FormGroup;
  value = 3.5;
  playIcon = faPlay;
  movie:any;
  watchMovie:boolean = false;
  player!: any;
  @ViewChild('target', {static: true}) target!: ElementRef;
  videoLink = 'https://vjs.zencdn.net/v/oceans.mp4';

options = {
  autoplay: false,
  notSupportedMessage: 'Invalid Video URL', // to change the default message

}
  // player: videojs.Player;
  // player: videojs;

  constructor(private moviesServices:MoviesService) {
     this.movie =  this.moviesServices.movieDetail();

  }
  
  ngAfterViewInit(): void {
      this.readyVideojsPlayer()
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value: new FormControl(4)
  });
}


readyVideojsPlayer() {

  this.player = videojs(this.target.nativeElement, this.options, function () { 
  
  });

  this.player.src({

     src: this.videoLink,
      type: 'video/mp4'

 })

}

ngOnDestroy(): void {
  if (this.player) {
    this.player.dispose();
  }
}



 
}
