import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IonicModule, Platform } from '@ionic/angular';
import { PresentationComponent } from './presentation.component';


describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;
  let router: jasmine.SpyObj<Router>;
  let platform: jasmine.SpyObj<Platform>;
  let translate: jasmine.SpyObj<TranslateService>;

  beforeEach(() => {
    spyOn(localStorage, 'getItem').and.callFake((key: string): string => {
      if (key === 'appLang') return 'es';
      return 'en';
    });
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const platformSpy = jasmine.createSpyObj('Platform', ['is']);
    const translateSpy = jasmine.createSpyObj('TranslateService', ['use']);


  TestBed.configureTestingModule({
    declarations: [ PresentationComponent ],
    imports: [ IonicModule.forRoot() ],  // Importa IonicModule
    providers: [
      { provide: Router, useValue: routerSpy },
      { provide: Platform, useValue: platformSpy },
      { provide: TranslateService, useValue: translateSpy }
    ]
  });

  fixture = TestBed.createComponent(PresentationComponent);
  component = fixture.componentInstance;
  router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  platform = TestBed.inject(Platform) as jasmine.SpyObj<Platform>;
  translate = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
});

it('Deberia crear el componente --- should create the component', () => {
  expect(component).toBeTruthy();
});

it('Deberia navegar a la pagina index si es web --- should navigate to /index if platform is desktop', () => {
  platform.is.and.returnValue(true);
  component.ngOnInit();
  expect(router.navigate).toHaveBeenCalledWith(['/index']);
});

it('sDeberia navegar a la pagina principal si es para celular --- Should navigate to main if platform is not desktop', () => {
  platform.is.and.returnValue(false);
  component.ngOnInit();
  expect(router.navigate).toHaveBeenCalledWith(['/']);
});

it('Deberia incrementar en 1 cuando next es llamamdo --- should increment step by 1 when next is called', () => {
  component.step = 2;
  component.next();
  expect(component.step).toBe(3);
});

it('Deberia reducir en 1 cuando back es llamamdo --should decrement step by 1 when back is called', () => {
  component.step = 2;
  component.back();
  expect(component.step).toBe(1);
});

it('Deberia navegar hacia /user cuando sendToJob() es llamado --- should navigate to /user when sendToJob is called', () => {
  component.sendToJob();
  expect(router.navigate).toHaveBeenCalledWith(['/user']);
});

it('Deberia navegar hacia registro cuando sendToEnterprise() es llamado --- should navigate to signup when sendToEnterprise() is called', () => {
  component.sendToEnterprise();
  expect(router.navigate).toHaveBeenCalledWith(['/signup-enterprise']);
});

});
