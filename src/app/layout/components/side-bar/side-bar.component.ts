import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { RouterModule } from '@angular/router';
import { JsonPipe } from '@angular/common';

// font awesome 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClapperboard, faTv, faBaseball, faEarth } from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule,JsonPipe,FontAwesomeModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {
  menuitems:any

  constructor(public layoutService:LayoutService, public el:ElementRef){}

  ngOnInit(): void {
    this.menuitems = [
      {
          label: 'Dash board',
          icon:faEarth,
          routerLink: [''],
          items: [
              {
                  label: 'Movies',
                  icon: faClapperboard,
                  routerLink: ['movies']
              },
              {
                  label: 'Series',
                  icon: faTv,
                  routerLink: ['series']
              },
              {
                  label: 'Sports',
                  icon: faBaseball,
                  routerLink: ['sports']
              }
          ]
      }
  ];
  }


}
