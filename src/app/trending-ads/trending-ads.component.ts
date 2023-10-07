import { Component } from '@angular/core';
import {
  faCloud, 
  faCalendar,
  faStar
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-trending-ads',
  templateUrl: './trending-ads.component.html',
  styleUrls: ['./trending-ads.component.css']
})
export class TrendingAdsComponent {
  title = 'classimax';
  faCloud = faCloud;
  faCalendar = faCalendar;
  faStar = faStar
}
