import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-thriller',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './thriller.component.html',
  styleUrl: './thriller.component.scss'
})
export class ThrillerComponent {

  faDoubleRight = faAngleDoubleRight

  Thirller = [
    {

      title:'Elysium',
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
]

}
