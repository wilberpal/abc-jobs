import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AbilityComponent } from '../ability/ability.component';
import { SuccessCreationComponent } from 'src/app/shared/success-creation/success-creation.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.scss'],
})
export class ApplicantsComponent  implements OnInit {
  picture: string = "assets/image/user-no-picture.webp"
  searchInput:string;
  isModalOpen:boolean;
  filteredList:any[];
  items: any[] = [
    {
      name:"agileSoft",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Ingeniero de software",
      author:"Franz Joseph Rogelez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"AriaLive",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Arquitecto de software",
      author:"Javier Andres Tirado",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"argentinaLibre",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Desarrollador",
      author:"Jesus Alexander Barrios",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"BerrandoBar",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Arquitecto de software",
      author:"Hugo Sebastian Rodriguez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"BordesdeVida",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Ingeniero de software",
      author:"Franz Joseph Rogelez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"CaminandoFalla",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Ingeniero de software",
      author:"Javier Andres Tirado",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"ConcretoLibre",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Arquitecto de software",
      author:"Jesus Alexander Barrios",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"DedosyPiernas",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Desarrollador",
      author:"Hugo Sebastian Rodriguez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"Entrevistados",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Desarrollador",
      author:"Franz Joseph Rogelez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"EmpleosMas",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Arquitecto de software",
      author:"Javier Andres Tirado",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"FacilElNogal",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      job:"Ingeniero de software",
      author:"Jesus Alexander Barrios",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
  ]

  constructor(private modalCtrl: ModalController,
    private router: Router,
    private translate:TranslateService) {
      translate.setDefaultLang('es')
    this.searchInput = ""
    this.filteredList = [...this.items];
    this.isModalOpen = false }

  ngOnInit() {}

  filterList() {
    if (!this.searchInput) {
      this.filteredList = [...this.items];
      return;
    }

    this.filteredList = this.items.filter(item =>
      item.author.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: AbilityComponent,
      cssClass: 'custom-modal'  // Aplica la clase CSS personalizada al modal
    });
    return await modal.present();
  }


  async addProjectModal() {
    const modal = await this.modalCtrl.create({
      component: SuccessCreationComponent,
      componentProps: {
        textModal: 'Se ha asignado el candidato a tu proyecto',
        textButton: 'Ok'
      }
    });
    return await modal.present();
  }

}
