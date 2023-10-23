import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

const dummy=[{
  nombre:"Diseñador",
  icon:"assets/image/Designer.svg"
},
{
  nombre:"Desarrollador",
  icon:"assets/image/Development.svg"
},
{
  nombre:"Marketing",
  icon:"assets/image/Marketing.svg"
},
{
  nombre:"Administración",
  icon:"assets/image/Management.svg"
},
{
  nombre:"Investigación",
  icon:"assets/image/Research.svg"
},
{
  nombre:"IT",
  icon:"assets/image/IT.svg"
},];

@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.scss'],
})
export class SearchJobComponent  implements OnInit {
  SelectedVal:boolean=false;
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
    const Mode = localStorage.getItem('DarkMode') || 'light';
    if(Mode === 'dark'){
      document.body.classList.toggle('dark', true);
    }
  }

  addValue(dummie:any){
    this.SelectedVal = true
  }

}
