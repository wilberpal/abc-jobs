import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
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


  constructor(private translate: TranslateService) {
   }
  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
    const Mode = localStorage.getItem('DarkMode') || 'light';
    if(Mode === 'dark'){
      document.body.classList.toggle('dark', true);
    }
   }

}
