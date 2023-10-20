import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

const dummy = [{
  nombre: "Estados Unidos",
},
{
  nombre: "Argentina",
},
{
  nombre: "Brazil",
},
{
  nombre: "Bolivia",
},
{
  nombre: "Colombia",
},
{
  nombre: "Chile",
},
{
  nombre: "Uruguay",
},
{
  nombre: "Venezuela",
},
{
  nombre: "Mexico",
},
{
  nombre: "Bolivia",
},
{
  nombre: "Ecuador",
},
{
  nombre: "Peru",
},
];

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent implements OnInit {
  cellphone: any;
  country = "";
  modeScreen: string = ''
  dummy: any[] = dummy;
  step: number;
  activePhone: boolean;
  activeMail: boolean;
  countrySelected: any;
  email: string = ""
  flagImage: string = 'assets/image/colombia.webp';
  currentPrefix: string = '+57';
  otpDigits: string[] = ['', '', '', ''];
  readonly totalDigits = 4;
  timer: number = 300;
  interval: any;
  verifyTime:boolean=false


  constructor(private router: Router,
    private translate: TranslateService) {
    this.step = 0;
    this.activeMail = false;
    this.activePhone = false;
  }

  startTimer() {
    this.timer = 30
    this.verifyTime = true;
    this.interval = setInterval(() => {
      if (this.timer > 0) {
        this.timer--;
      } else {
        this.stopTimer();
      }
    }, 1000)
  }

  stopTimer() {
    clearInterval(this.interval);
    this.verifyTime = false
  }

  formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${this.pad(mins)}:${this.pad(secs)}`;
  }

  pad(num: number): string {
    return ('00' + num).slice(-2);
  }

  areAllFieldsFilled(): boolean {
    return this.otpDigits.every(digit => digit.trim() !== '');
  }

  toggleCountry(): void {
    if (this.currentPrefix === '+57') {
      this.flagImage = 'path/to/usa-flag.png'; // Reemplaza con tu ruta real
      this.currentPrefix = '+1';
    } else {
      this.flagImage = 'path/to/colombia-flag.png'; // Reemplaza con tu ruta real
      this.currentPrefix = '+57';
    }
  }


  ngOnInit() {
    const lang = localStorage.getItem('appLang') || 'es';
    this.translate.use(lang);
    const Mode = localStorage.getItem('DarkMode') || 'light';
    this.modeScreen = Mode;
    if (Mode === 'dark') {
      document.body.classList.toggle('dark', true);
    }
  }

  next() {
    if (this.step >= 0 && this.step < 4) {
      this.step += 1;
    }
    if (this.step == 3) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }

  chooseCountry(dummie: any) {
    this.countrySelected = dummie;
  }

  isEmailValid(email: string): boolean {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() == "" || !regex.test(email)) {
      return false;
    } else {
      return true;
    }
  }

  back() {
    if (this.step >= 0 && this.step <= 4) {
      this.step -= 1;
    }
  }

  activeVerify(method: string) {
    if (method == 'phone') {
      this.activePhone = true;
      if (this.activeMail == true) {
        this.activeMail = false;
      }
    }
    if (method == 'mail') {
      this.activeMail = true;
      if (this.activePhone == true) {
        this.activePhone = false;
      }
    }
  }

  sendToAccount() {
    this.router.navigate(['/user/project']);
  }
  sendToJobs() {
    this.router.navigate(['/user/profile']);
  }

}
