import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarouselModule,TagModule,FontAwesomeModule,RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  responsiveOptions:any;
  products:any
  faDoubleRight = faAngleDoubleRight
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

  marvels = [
    {

      title:'Iron Man',
      genre:'Action/Adventure',
      releaseDate:'27 April 2012',
      poster:"https://i.pinimg.com/originals/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg"

    },
    {

      title:'thor ragnarok',
      genre:'Action/Adventure',
      releaseDate:'27 April 2012',
      poster:"https://i.pinimg.com/564x/92/7f/57/927f573aee7755f33578ba1ddd984235.jpg"

    },
    {

      title:'capitan america',
      genre:'Action/Adventure',
      releaseDate:'27 April 2012',
      poster:"https://i.pinimg.com/564x/ea/ab/9f/eaab9f496fbc60e586f0d073d3fcc693.jpg"

    },
    {

      title:'Avenger Infinity war',
      genre:'Action/Adventure',
      releaseDate:'27 April 2012',
      poster:"https://i.pinimg.com/564x/db/b9/7a/dbb97a265c3754f6965d2bfcff52ab6f.jpg"

    },
    {

      title:'Avenger',
      genre:'Action/Adventure',
      releaseDate:'27 April 2012',
      poster:"https://i.pinimg.com/564x/cf/41/f8/cf41f89b434e68864d0e3360d87d1cbf.jpg"

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