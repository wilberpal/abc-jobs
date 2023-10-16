import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent  implements OnInit {

  prueba = {
    name: 'Alimentos S.A.S',
    author: 'Franz Joseph',
    date: '21-08-2023',
    technology: '',
    status: '',
    observation: '',
  };
  constructor(private modalCtrl: ModalController) { }


  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

  camposCompletos(): boolean {
    if (this.prueba.status && this.prueba.observation) {
      return true
    }
    else {
      return false
    }

  }

  isNombreEmpty(value:string): boolean {
    return !value.trim();
  }

  createNewProject(){
    this.modalCtrl.dismiss(this.prueba);
  }
}
