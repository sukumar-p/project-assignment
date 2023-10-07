import { Component } from '@angular/core';

import {
  faPlusCircle,
  faCaretDown,
  faHotel, 
  faCar, 
  faUtensilSpoon, 
  faMugHot, 
  faPersonBooth, 
  faCloud, 
  faCalendar,
  faStar
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  title = 'classimax';
  faPlus = faPlusCircle;
  faCartArrowDown = faCaretDown;
  faHotel = faHotel;
  faCar = faCar;
  faUtensilSpoon = faUtensilSpoon;
  faMugHot = faMugHot;
  faPersonBooth = faPersonBooth;
  faCloud = faCloud;
  faCalendar = faCalendar;
  faStar = faStar
}