import { Component } from '@angular/core';
import { UtilityService } from '../Utilityservice';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  title1 = '404';
  title2 = 'Error';
  
  constructor(public utility: UtilityService){}
}
