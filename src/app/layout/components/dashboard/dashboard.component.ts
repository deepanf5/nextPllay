import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { MarvelComponent } from './movies/marvel/marvel.component';
import { ActionScifiComponent } from './movies/action-scifi/action-scifi.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CarouselModule,
    TagModule,
    FontAwesomeModule,
    RouterModule,
    MarvelComponent,
    ActionScifiComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  responsiveOptions:any;
  products:any
  images = [


    {
    image:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/353CC6E434CA544C677596ACDDE553B762C4D4E49E52F36B4C3205EA49CFA8DD/scale?width=1200&aspectRatio=1.78&format=webp"
    },
    {
    image:"https://images7.alphacoders.com/136/thumb-1920-1364834.png"
    },
    {
    image:"https://images6.alphacoders.com/135/1353224.jpeg"
    },
    {
    image:"https://images7.alphacoders.com/135/thumb-1920-1358613.jpeg"
    },
    {
    image:"https://4kwallpapers.com/images/walls/thumbs_3t/16612.jpg"
    },

  ]


  ngOnInit(): void {
    
  this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

 

}