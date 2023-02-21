import { Component } from '@angular/core';
import { UtilityService } from '../Utilityservice';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(public utility: UtilityService){}
}
