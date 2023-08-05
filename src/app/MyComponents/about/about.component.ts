import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  openAccordian : boolean = false;
  open(){
this.openAccordian=true;
  }
}
