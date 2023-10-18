import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { CreateProjectComponent } from '../proyect/create-project/create-project.component';

@Component({
  selector: 'app-projecte-web',
  templateUrl: './projecte-web.component.html',
  styleUrls: ['./projecte-web.component.scss'],
})
export class ProjecteWebComponent implements OnInit {
  searchInput: string;
  isModalOpen: boolean;
  items: any[] = [
    {
      name: "agileSoft",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "good"
    },
    {
      name: "AriaLive",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "bad"
    },
    {
      name: "argentinaLibre",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "caution"
    },
    {
      name: "BerrandoBar",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "bad"
    },
    {
      name: "BordesdeVida",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "good"
    },
    {
      name: "CaminandoFalla",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "good"
    },
    {
      name: "ConcretoLibre",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "bad"
    },
    {
      name: "DedosyPiernas",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "caution"
    },
    {
      name: "Entrevistados",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "caution"
    },
    {
      name: "EmpleosMas",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "bad"
    },
    {
      name: "FacilElNogal",
      shortDescription: "Soluciones ágiles y a medida para proyectos software.",
      status: "good"
    },
  ]
  filteredList: any[];
  constructor(private modalCtrl: ModalController,
    private translate: TranslateService,
    private router: Router) {
    this.searchInput = ""
    this.filteredList = [...this.items];
    this.isModalOpen = false

  }

  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
  }

  fistWord(word: string): string {
    var letter = word[0];
    return letter
  }

  filterList() {
    if (!this.searchInput) {
      this.filteredList = [...this.items];
      return;
    }

    this.filteredList = this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CreateProjectComponent,
      cssClass: 'custom-web'

    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null && dataReturned.data) {
        this.items.push(dataReturned.data);
        // Aquí puedes hacer lo que necesites con los datos retornados
      }
    });

    return await modal.present();
  }

closeModal() {
  this.isModalOpen = false;
}
}
