import { Component, ElementRef, OnInit } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule,JsonPipe],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent implements OnInit {
  menuitems: MenuItem[] | undefined;

  constructor(public layoutService:LayoutService, public el:ElementRef){}

  ngOnInit(): void {
    this.menuitems = [
      {
          label: 'Dash board',
          routerLink: [''],
          items: [
              {
                  label: 'Movies',
                  icon: 'pi pi-video',
                  routerLink: ['movies']
              },
              {
                  label: 'Tv series',
                  icon: 'pi pi-search',
                  routerLink: ['tv-series']
              },
              {
                  label: 'Sports',
                  icon: 'pi pi-search'
              }
          ]
      }
  ];
  }


}
