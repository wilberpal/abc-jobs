import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit, AfterViewInit {
  picture: string = "assets/image/user-no-picture.webp"
  step = 0;
  private swiper: Swiper;

  constructor(private elementRef: ElementRef) {
      // Esperar a que el DOM esté listo
        this.swiper = new Swiper('.swiper-container', {
          // Configuración de Swiper
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // Añade más configuración según lo necesario
        });
  }

  ngAfterViewInit() {
    this.swiper = new Swiper(this.elementRef.nativeElement.querySelector('.swiper-container'), {
      // Opciones de Swiper
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      on: {
        slideChange: () => {

          this.actualizarContador();
        }
      }
      // ... otras opciones ...
    });
  }

  actualizarContador() {
    if(this.swiper.activeIndex > this.swiper.previousIndex) {
      // Si el índice activo es mayor que el índice anterior, entonces se deslizó hacia adelante
      this.step += 1;
    } else if (this.swiper.activeIndex < this.swiper.previousIndex) {
      // Si el índice activo es menor que el índice anterior, entonces se deslizó hacia atrás
      this.step -= 1;
    }
  }
  ngOnInit() {}

}
