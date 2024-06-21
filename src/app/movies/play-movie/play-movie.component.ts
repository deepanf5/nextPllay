import { Component, ElementRef, ViewChild } from '@angular/core';
import videojs from 'video.js';
import { MoviesService } from '../services/movie/movies.service';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-play-movie',
  standalone: true,
  imports: [CardModule],
  templateUrl: './play-movie.component.html',
  styleUrl: './play-movie.component.scss'
})
export class PlayMovieComponent {

  movie:any
  public video!: HTMLVideoElement;
  public player!: any;
  @ViewChild('videoElement') videoElement!: ElementRef;
  

  constructor(private moviesServices:MoviesService,private elementRef: ElementRef) {
     this.movie =  this.moviesServices.movieDetail();

  }
 
  ngAfterViewInit(): void {
    const options = {
      autoplay: false,
      controls: true,
      'sources' : [{
        'src' : 'https://media.vimejs.com/720p.mp4',
        'type' : 'video/mp4'
        }
      ],
      'poster' : 'https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/webm.jpg'
    };
    this.player = videojs('HTML5Video', options,  () => {
      this.player.play();
    })
  }


  ngOnInit(): void {

  }
  
  
  ngOnDestroy(): void {
    if (this.player) {
      this.player.dispose();
  }
  
  }

  }

 
 

