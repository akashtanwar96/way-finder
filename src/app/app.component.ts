import { Component } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finder';
  address = [{ label: 'Gate 1', value: 1 },
  { label: 'Gate 2', value: 2 },
  { label: 'Reception', value: 3 },
  { label: 'Parking', value: 4 },
  { label: 'Canteen', value: 5 }];

  from: number = this.address[0].value;
  fromTitle: string = this.address[0].label;
  toTitle: string = this.address[1].label;
  to: number = this.address[1].value;
  imgFlag = true;
  imgURL : string =`./../assets/12.jpg`;
  

  onFromSelect(item: number,label: string) {
    this.fromTitle = label
    this.from = item;
  }

  onToSelect(item: number,label: string) {
    this.toTitle = label
    this.to = item;    
  }

  onSubmit() {
    if(this.from == this.to) {
      this.imgFlag = false;
      console.log("No image as same source and destination");
      
    } else {
      this.imgFlag = true;
      this.imgURL = `./../assets/${this.from.toString().concat(this.to.toString())}.jpg`;
      console.log(this.imgURL,this.imgFlag,'image should be availabe');
    }
  }
    
  getImg() {
    if(isNullOrUndefined(this.from) && isNullOrUndefined(this.to)) {
      return true;
    } else {
      return false;
    }
  }
}
