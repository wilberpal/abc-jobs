import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const dummy=[{
  nombre:"Estados Unidos",
},
{
  nombre:"Argentina",
},
{
  nombre:"Brazil",
},
{
  nombre:"Bolivia",
},
{
  nombre:"Colombia",
},
{
  nombre:"Chile",
},
{
  nombre:"Uruguay",
},
{
  nombre:"Venezuela",
},
{
  nombre:"Mexico",
},
{
  nombre:"Bolivia",
},
{
  nombre:"Ecuador",
},
{
  nombre:"Peru",
},
];

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent  implements OnInit {
  dummy:any[]=dummy;
  step:number;
  activePhone:boolean;
  activeMail:boolean;

  constructor(private router: Router) {
    this.step = 0;
    this.activeMail = false;
    this.activePhone = false;
   }

  ngOnInit() {}

  next(){
    if(this.step >= 0 && this.step < 4){
      this.step += 1;
    }
  }

  back(){
    if(this.step >= 0 && this.step <= 4){
      this.step -= 1;
    }
  }

  activeVerify(method:string){
    if(method =='phone'){
      this.activePhone = true;
      if(this.activeMail == true){
        this.activeMail = false;
      }
    }
    if(method =='mail'){
      this.activeMail = true;
      if(this.activePhone == true){
        this.activePhone = false;
      }
    }
  }

  sendToAccount(){
    this.router.navigate(['/user/project']);
  }
  sendToJobs(){
    this.router.navigate(['/user/profile']);
  }

}
