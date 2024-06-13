import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-disney-pixar',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './disney-pixar.component.html',
  styleUrl: './disney-pixar.component.scss'
})
export class DisneyPixarComponent {

  
  faDoubleRight = faAngleDoubleRight

  disneyPixar = [
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

}
