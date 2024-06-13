import { Component, OnInit } from '@angular/core';

// prime-ng
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FilterService } from 'primeng/api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [IconFieldModule,InputIconModule,InputTextModule,FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{

  searchMovies:any
  filteredMovies:any;

  constructor(private filterService:FilterService) {}
  ngOnInit(): void {
    this.filteredMovies = this.movies
  }

  
  movies = [
    {

      title:'Elysium',
      genre:'Action sci-fi',
      releaseDate:'2013',
      poster:"https://i.pinimg.com/originals/40/d2/94/40d29423c00552439d1e597a9eabbaba.jpg",
      language:'Engilsh'

    },
    {

      title:'Rebel moon',
      genre:'Action sci-fi',
      releaseDate:'2023',
      poster:"https://i.pinimg.com/originals/97/da/52/97da52f84437a633ec3c7f73dfba0181.jpg",
      language:'Engilsh'

    },
    {

      title:'Rebel moon',
      genre:'Action sci-fi',
      releaseDate:'2024',
      poster:"https://i.pinimg.com/736x/82/b4/00/82b400d554945ab8e0539ba9fd012907.jpg",
      language:'Engilsh'

    },
    {

      title:'Tenet',
      genre:'Action sci-fi',
      releaseDate:'2020',
      poster:"https://i.pinimg.com/originals/35/62/1c/35621c61d9b8bc652beba9245695805e.jpg",
      language:'Engilsh'

    },
    {

      title:'Transformer : rise of the beast',
      genre:'Action sci-fi',
      releaseDate:'2013',
      poster:"https://i.pinimg.com/originals/f2/9e/81/f29e81c4527a8d05f00e6a2f13d2b510.jpg",
      language:'Engilsh'

    },
    {

      title:'the beekeeper',
      genre:'Action thirller',
      releaseDate:'2024',
      poster:"https://i.pinimg.com/originals/d9/a7/4c/d9a74c02647f9728b162df7bd843a3ec.jpg",
      language:'Engilsh'

    },
    {

      title:'John wick',
      genre:'Action thriller',
      releaseDate:'2023',
      poster:"https://i.pinimg.com/originals/63/17/13/63171370473454a0f2981d989213f8f3.jpg",
      language:'Engilsh'

    },
    {

      title:'Road house',
      genre:'Action thriller',
      releaseDate:'2024',
      poster:"https://i.pinimg.com/originals/a7/9a/81/a79a814517383786d60005b298e90bd8.jpg",
      language:'Engilsh'

    },
    {

      title:'The batman',
      genre:'Action sci-fi',
      releaseDate:'2022',
      poster:"https://i.pinimg.com/originals/bf/fc/a2/bffca257b49b4aa900d36ad9015c79d7.jpg",
      language:'Engilsh'

    },
    {

      title:'Sherlock Holmes: A Game of Shadows',
      genre:'Action sci-fi',
      releaseDate:'2011',
      poster:"https://i.pinimg.com/originals/8a/68/78/8a6878e5ac69fbf57a35c8dcb8dbd5ef.jpg",
      language:'Engilsh'

    },
    {

      title:'Iron Man',
      genre:'Action/Adventure',
      releaseDate:'2008',
      poster:"https://i.pinimg.com/originals/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg",
      language:'Engilsh'

    },
    {

      title:'thor ragnarok',
      genre:'Action/Adventure',
      releaseDate:'2017',
      poster:"https://i.pinimg.com/564x/92/7f/57/927f573aee7755f33578ba1ddd984235.jpg",
      language:'Engilsh'

    },
    {

      title:'capitan america',
      genre:'Action/Adventure',
      releaseDate:'2011',
      poster:"https://i.pinimg.com/564x/ea/ab/9f/eaab9f496fbc60e586f0d073d3fcc693.jpg",
      language:'Engilsh'

    },
    {

      title:'Avenger Infinity war',
      genre:'Action/Adventure',
      releaseDate:'2018',
      poster:"https://i.pinimg.com/564x/db/b9/7a/dbb97a265c3754f6965d2bfcff52ab6f.jpg",
      language:'Engilsh'

    },
    {

      title:'Avenger',
      genre:'Action/Adventure',
      releaseDate:'27 April 2012',
      poster:"https://i.pinimg.com/564x/cf/41/f8/cf41f89b434e68864d0e3360d87d1cbf.jpg",
      language:'Engilsh'

    },
    {

      title:'soul',
      genre:'Family fantasy',
      releaseDate:'2020',
      poster:"https://i.pinimg.com/originals/56/65/86/566586f4e0a60470d16c574df89baa98.jpg",
      language:'Engilsh'

    },
    {

      title:'Coco',
      genre:'Family fantasy',
      releaseDate:'2017',
      poster:"https://i.pinimg.com/originals/52/40/93/52409341203bb9276ec911ebbda4f91d.jpg",
      language:'Engilsh'

    },
    {

      title:'Wall E',
      genre:'Family sci-fi',
      releaseDate:'2011',
      poster:"https://i.pinimg.com/originals/5b/ba/89/5bba89ee39594f364ca7cdcd06f95adc.jpg",
      language:'Engilsh'

    },
    {

      title:'Cars',
      genre:'Family comdey',
      releaseDate:'2006',
      poster:"https://i.pinimg.com/originals/c7/72/8e/c7728e62ebebe611ee9f954c9bf2c700.jpg",
      language:'Engilsh'

    },
    {

      title:'Ratatouille',
      genre:'Family comdey',
      releaseDate:'2007',
      poster:"https://i.pinimg.com/564x/87/91/bd/8791bd9195dc87f5b3972d321112d865.jpg",
      language:'Engilsh'

    },
]

filterMovies(searchmovie: string) {
  this.filteredMovies = this.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchmovie.toLowerCase())
  );
}

}
