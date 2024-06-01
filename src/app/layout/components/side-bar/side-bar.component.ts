import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  constructor(public layoutService:LayoutService, public el:ElementRef){}


}
