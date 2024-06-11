import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-marvel',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './marvel.component.html',
  styleUrl: './marvel.component.scss'
})
export class MarvelComponent {

  faDoubleRight = faAngleDoubleRight

  marvels = [
    {

      title:'Iron Man',
      genre:'Action/Adventure',
      releaseDate:'2008',
      poster:"https://i.pinimg.com/originals/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg"

    },
    {

      title:'thor ragnarok',
      genre:'Action/Adventure',
      releaseDate:'2017',
      poster:"https://i.pinimg.com/564x/92/7f/57/927f573aee7755f33578ba1ddd984235.jpg"

    },
    {

      title:'capitan america',
      genre:'Action/Adventure',
      releaseDate:'2011',
      poster:"https://i.pinimg.com/564x/ea/ab/9f/eaab9f496fbc60e586f0d073d3fcc693.jpg"

    },
    {

      title:'Avenger Infinity war',
      genre:'Action/Adventure',
      releaseDate:'2018',
      poster:"https://i.pinimg.com/564x/db/b9/7a/dbb97a265c3754f6965d2bfcff52ab6f.jpg"

    },
    {

      title:'Avenger',
      genre:'Action/Adventure',
      releaseDate:'27 April 2012',
      poster:"https://i.pinimg.com/564x/cf/41/f8/cf41f89b434e68864d0e3360d87d1cbf.jpg"

    },
]

}
