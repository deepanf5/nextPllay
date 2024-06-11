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
      poster:"https://i.pinimg.com/originals/40/d2/94/40d29423c00552439d1e597a9eabbaba.jpg"

    },
    {

      title:'Rebel moon',
      genre:'Action sci-fi',
      releaseDate:'2023',
      poster:"https://i.pinimg.com/originals/b4/49/b2/b449b2e9b7b4669b5d921b05066cf0e1.jpg"

    },
    {

      title:'Rebel moon',
      genre:'Action sci-fi',
      releaseDate:'2024',
      poster:"https://i.pinimg.com/originals/65/f0/a5/65f0a5d31be744782ac6f2d143d09a05.jpg"

    },
    {

      title:'Tenet',
      genre:'Action sci-fi',
      releaseDate:'2020',
      poster:"https://i.pinimg.com/originals/35/62/1c/35621c61d9b8bc652beba9245695805e.jpg"

    },
    {

      title:'Transformer rise of the beast',
      genre:'Action sci-fi',
      releaseDate:'2013',
      poster:"https://i.pinimg.com/originals/f2/9e/81/f29e81c4527a8d05f00e6a2f13d2b510.jpg"

    },
]


}
