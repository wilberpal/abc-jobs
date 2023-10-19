import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-data',
  templateUrl: './modal-data.component.html',
  styleUrls: ['./modal-data.component.scss'],
})
export class ModalDataComponent  implements OnInit {
  @Input() option:number = 0
  @Input() title:string = ""
  @Input() description:string = ""
  modeScreen:string=""
  academic = {
    institucion: '',
    career: '',
    dateStart: '',
    dateEnd: '',
    type: '',
  };

  laboral = {
    role: '',
    enterprise: '',
    dateStart: '',
    dateEnd: '',
    activity: '',
  };

  knowledge = {
    name: '',
    value: 0,

  };
  language = {
    name: '',
    level: '',

  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    const Mode = localStorage.getItem('DarkMode') || 'light';
    this.modeScreen = Mode;
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  camposCompletosAcademic(): boolean {
    if (this.academic.institucion && this.academic.career && this.academic.dateStart && this.academic.dateEnd && this.academic.type) {
      return true
    }
    else {
      return false
    }

  }
  camposCompletosLaboral(): boolean {
    if (this.laboral.role && this.laboral.enterprise && this.laboral.dateStart && this.laboral.dateEnd && this.laboral.activity) {
      return true
    }
    else {
      return false
    }

  }
  camposCompletosLanguage(): boolean {
    if (this.language.name && this.language.level) {
      return true
    }
    else {
      return false
    }

  }

  camposCompletosknowledge(): boolean {
    if (this.knowledge.name && this.knowledge.value) {
      return true
    }
    else {
      return false
    }

  }

  isNombreEmpty(value:string): boolean {
    return !value.trim();
  }

  isValueEmpty(value:number): boolean {
    if(value > 0 || value < 100 || !value){
      return true;
    }else{
      return false
    }
  }

  createNewAcademicInformation(){
    this.modalCtrl.dismiss(this.academic);
  }
  createLanguageInformation(){
    this.modalCtrl.dismiss(this.language);
  }

  createNewLaboralInformation(){
    this.modalCtrl.dismiss(this.laboral);
  }
  createNewknowledgeInformation(){
    this.modalCtrl.dismiss(this.knowledge);
  }

}
