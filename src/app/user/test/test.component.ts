import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent  implements OnInit {
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
    private router: Router) {
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

  sendToDetails(){
    this.router.navigate(['/user/interview/1']);
  }

  ngOnInit() {}

}
