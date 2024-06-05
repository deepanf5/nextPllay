import { Component, ElementRef, ViewChild } from '@angular/core';
import { LayoutService } from '../../services/layout.service';
import { ThemeService } from '../../../themeservices/theme.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {

  dark:boolean = true;  
  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;


  constructor(public layoutService:LayoutService,private themeServices: ThemeService){}
  isExpanding = false;
  

  theme: any

  ngOnInit() {
  
  }


  darkTheme() {
    this.dark = !this.dark
    if(this.dark) this.themeServices.switchTheme('lara-dark-teal')
    else this.themeServices.switchTheme('saga-green')
    
  }


}
