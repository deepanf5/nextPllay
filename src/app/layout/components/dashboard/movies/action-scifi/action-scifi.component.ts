import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-scifi',
  standalone: true,
  imports: [FontAwesomeModule,RouterModule],
  templateUrl: './action-scifi.component.html',
  styleUrl: './action-scifi.component.scss'
})
export class ActionScifiComponent {

  
  faDoubleRight = faAngleDoubleRight

  ActionAndSciFi = [
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
]


}
