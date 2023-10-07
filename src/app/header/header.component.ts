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
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
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
