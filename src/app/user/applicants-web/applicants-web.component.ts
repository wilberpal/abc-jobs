import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SuccessCreationComponent } from 'src/app/shared/success-creation/success-creation.component';
import { AbilityComponent } from '../ability/ability.component';
import { PerformanceComponent } from '../performance/performance.component';

@Component({
  selector: 'app-applicants-web',
  templateUrl: './applicants-web.component.html',
  styleUrls: ['./applicants-web.component.scss'],
})
export class ApplicantsWebComponent  implements OnInit {
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
    this.searchInput = ""
    this.filteredList = [...this.items];
    this.isModalOpen = false }


    ngOnInit() {
      const lang = localStorage.getItem('appLang') || 'es';
      this.translate.use(lang);
      const Mode = localStorage.getItem('DarkMode') || 'light';
      if(Mode === 'dark'){
        document.body.classList.toggle('dark', true);
      }
    }

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
        cssClass: 'custom-web'
      });
      return await modal.present();
    }


    async addProjectModal() {
      const modal = await this.modalCtrl.create({
        component: SuccessCreationComponent,
        cssClass: 'custom-web',
        componentProps: {
          textModal: "user.applicants.add.project.tex",
          textButton: 'Ok'
        }
      });
      return await modal.present();
    }

    async performanceEvaluation() {
      const modal = await this.modalCtrl.create({
        component: PerformanceComponent,
        cssClass: 'custom-web',
      });
      return await modal.present();
    }
}
