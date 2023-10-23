import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { AccesibilityComponent } from '../accesibility/accesibility.component';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent  implements OnInit {

  constructor(private modalCtrl: ModalController,
    private platform: Platform) { }

  ngOnInit() {}

  async accessibilityModal() {
    const modal = await this.modalCtrl.create({
      component: AccesibilityComponent,
      cssClass: 'custom-modal', // Aplica la clase CSS personalizada al modal
    });

    return await modal.present();
  }



}
