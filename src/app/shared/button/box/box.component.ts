import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent  implements OnInit {
  @Input() boxNumber:number=0;
  @Input() step:number=0;
  boxes: any[] = [];
  constructor() { }

  ngOnInit() {
    this.boxes = Array.from({length: this.boxNumber});
  }

}
