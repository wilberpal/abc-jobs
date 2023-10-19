import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-creation',
  templateUrl: './success-creation.component.html',
  styleUrls: ['./success-creation.component.scss'],
})
export class SuccessCreationComponent  implements OnInit {
  modeScreen: string = ""
  @Input() textModal: string = "";
  @Input() textButton: string = "";

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const Mode = localStorage.getItem('DarkMode') || 'light';
    this.modeScreen = Mode;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }
}
