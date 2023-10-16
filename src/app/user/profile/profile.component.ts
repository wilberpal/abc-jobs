import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalDataComponent } from '../modal-data/modal-data.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent  implements OnInit {
  picture: string = "assets/image/user-no-picture.webp"

  items: any = [
    {
      name: "PHP",
      level: 86
    },
    {
      name: "Java",
      level: 48
    },
    {
      name: "MySQL",
      level: 56
    },
    {
      name: "React N",
      level: 34
    },
    {
      name: "CSS",
      level: 75
    },
  ]

  skills: any = {

    studies:[
      {
        title:"M.Sc. in Computer Science (Maestría), Ciencias de la computación",
        place:"Universidad Nacional de Colombia",
        yearRange:"2014 - 2016"

      },
      {
        title:"M.Sc. in Computer Science (Maestría), Ciencias de la computación",
        place:"SENA",
        yearRange:"2007 - 2012"

      },
    ],
    certificate: [
      {
        name: "Angular",
        academy: "Udemy",
        year: "2020"
      },
      {
        name: "Oracle",
        academy: "oracle",
        year: "2018"
      },
      {
        name: "Java",
        academy: "HackerRank",
        year: "2015"
      },
      {
        name: "python",
        academy: "CISCO",
        year: "2023"
      },
    ],
    works: [
      {
        name: "Arquitecto de software",
        academy: "Zenware S.A.S",
        year: "2015-Actualidad"
      },
      {
        name: "Arquitecto de software",
        academy: "Compufacil",
        year: "2012 - 2015"
      },
      {
        name: "Senior software Developer",
        academy: "Compufacil",
        year: "2013 - 2015"
      },
    ],
    Languages: [
      {
        name: "Español",
        experience: "Nativo",
      },
      {
        name: "Ingles",
        experience: "Intermedio - Alto",
      },
    ],
    softSkills: [
      {
        name: "Responsabilidad",
        experience: "Alta",
      },
      {
        name: "Liderazgo",
        experience: "Medio",
      },
    ],

  }

  constructor(private modalCtrl: ModalController,
    private translate:TranslateService) {
    translate.setDefaultLang('es')
  }

  async AcademicModal() {
    const modal = await this.modalCtrl.create({
      component: ModalDataComponent,
      cssClass: 'custom-modal', // Aplica la clase CSS personalizada al modal
      componentProps: {
        option: 1,
        title: "user.academic.data",
        description: "user.academic.data.text"
      }
    });

    return await modal.present();
  }

  async laboralModal() {
    const modal = await this.modalCtrl.create({
      component: ModalDataComponent,
      cssClass: 'custom-modal', // Aplica la clase CSS personalizada al modal
      componentProps: {
        option: 2,
        title: "user.laboral.data",
        description: "user.laboral.data.text"
      }
    });

    return await modal.present();
  }
  async skillsModal() {
    const modal = await this.modalCtrl.create({
      component: ModalDataComponent,
      cssClass: 'custom-modal-2', // Aplica la clase CSS personalizada al modal
      componentProps: {
        option: 0,
        title: "user.technical.knowledge.data",
        description: "user.technical.knowledge.data.text"
      }
    });

    return await modal.present();
  }

  async languageModal() {
    const modal = await this.modalCtrl.create({
      component: ModalDataComponent,
      cssClass: 'custom-modal-2', // Aplica la clase CSS personalizada al modal
      componentProps: {
        option: 3,
        title: "user.languages",
        description: "user.languages.select"
      }
    });

    return await modal.present();
  }

  ngOnInit() {}

}
