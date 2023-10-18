import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TestDetailsComponent } from '../test/test-details/test-details.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-interview-web',
  templateUrl: './interview-web.component.html',
  styleUrls: ['./interview-web.component.scss'],
})
export class InterviewWebComponent  implements OnInit {
  searchInput:string;
  isModalOpen:boolean;
  filteredList:any[];
  items: any[] = [
    {
      name:"agileSoft",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"good",
      author:"Franz Joseph Rogelez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"AriaLive",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"bad",
      author:"Javier Andres Tirado",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"argentinaLibre",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"caution",
      author:"Jesus Alexander Barrios",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"BerrandoBar",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"bad",
      author:"Hugo Sebastian Rodriguez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"BordesdeVida",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"good",
      author:"Franz Joseph Rogelez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"CaminandoFalla",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"good",
      author:"Javier Andres Tirado",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"ConcretoLibre",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"bad",
      author:"Jesus Alexander Barrios",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"DedosyPiernas",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"caution",
      author:"Hugo Sebastian Rodriguez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"Entrevistados",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"caution",
      author:"Franz Joseph Rogelez",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"EmpleosMas",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"bad",
      author:"Javier Andres Tirado",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    {
      name:"FacilElNogal",
      shortDescription:"Soluciones ágiles y a medida para proyectos software.",
      status:"good",
      author:"Jesus Alexander Barrios",
      date:"20 de Septiembre 2023 - 10:30 am"
    },
    ]
    constructor(private modalCtrl: ModalController,
      private router: Router,
      private translate: TranslateService) {
      this.searchInput = ""
      this.filteredList = [...this.items];
      this.isModalOpen = false
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

    fistWord(word: string): string {
      var letter = word[0];
      return letter
    }

    async sendToDetails() {
      const modal = await this.modalCtrl.create({
        component: TestDetailsComponent,
        cssClass: 'custom-web'
      });
      return await modal.present();
    }


  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
  }

}
