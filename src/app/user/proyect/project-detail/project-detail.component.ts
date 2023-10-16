import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PerformanceComponent } from '../../performance/performance.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent  implements OnInit {
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
    },]

    constructor(private modalCtrl: ModalController,
      private router: Router) {
      this.searchInput = ""
      this.filteredList = [...this.items];
      this.isModalOpen = false }

  ngOnInit() {}


  backPage() {
    window.history.back();
  }

  async performanceEvaluation() {
    const modal = await this.modalCtrl.create({
      component: PerformanceComponent,
      cssClass: 'custom-modal'  // Aplica la clase CSS personalizada al modal
    });
    return await modal.present();
  }

  goToAccount(){
    this.router.navigate(["/user/account"]);
  }

}
