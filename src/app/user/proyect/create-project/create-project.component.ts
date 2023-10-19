import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  proyecto = {
    name: '',
    shortDescription: '',
    status: '',
    rol: ''
  };
  modeScreen=""
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const Mode = localStorage.getItem('DarkMode') || 'light';
    this.modeScreen = Mode;
   }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  camposCompletos(): boolean {
    if (this.proyecto.name && this.proyecto.shortDescription && this.proyecto.status && this.proyecto.rol) {
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
    this.modalCtrl.dismiss(this.proyecto);
  }
}
