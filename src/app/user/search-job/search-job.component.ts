import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

const dummy=[{
  nombre:"Diseñador",
  icon:"color-palette-outline"
},
{
  nombre:"Desarrollador",
  icon:"terminal-outline"
},
{
  nombre:"Marketing",
  icon:"megaphone-outline"
},
{
  nombre:"Administración",
  icon:"cog-outline"
},
{
  nombre:"Investigación",
  icon:"stats-chart-outline"
},
{
  nombre:"IT",
  icon:"tv-outline"
},];

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss'],
})
export class SearchJobComponent  implements OnInit {
  dummy:any[]=dummy;
  constructor(private router:Router,
    private translate: TranslateService) {
     }

  goToAccount(){
    this.router.navigate(['/signup']);
  }
  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
  }

}
