import { Component, Input } from '@angular/core';
import { Appartement } from '../models/appartement';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent {

  @Input() appartment!:Appartement

}
