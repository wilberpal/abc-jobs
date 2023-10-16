import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-file',
  templateUrl: './card-file.component.html',
  styleUrls: ['./card-file.component.scss'],
})
export class CardFileComponent  implements OnInit {
  @Input() title: string = "";
  @Input() documentName: string = "";
  constructor() { }

  ngOnInit() {}

}
