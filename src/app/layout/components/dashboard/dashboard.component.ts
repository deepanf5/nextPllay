import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  
  responsiveOptions:any;
  products:any
  images = [


    {
    image:"https://images8.alphacoders.com/134/thumb-1920-1344731.jpeg"
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



this.products = [
  {
    name:'test carsoual'
  },
  {
    name:'test carsoual'
  },
  {
    name:'test carsoual'
  }
]
  }

 

}