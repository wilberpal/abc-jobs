import { SearchJobComponent } from './search-job.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';

describe('SearchJobComponent', () => {
  let component: SearchJobComponent;
  let fixture: ComponentFixture<SearchJobComponent>;
  let router: jasmine.SpyObj<Router>;
  let translate: jasmine.SpyObj<TranslateService>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    const translateSpy = jasmine.createSpyObj('TranslateService', ['use']);

    await TestBed.configureTestingModule({
      declarations: [SearchJobComponent],
      imports: [
        IonicModule.forRoot(),
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader }
        })
      ],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: TranslateService, useValue: translateSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchJobComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    translate = TestBed.inject(TranslateService) as jasmine.SpyObj<TranslateService>;
  });

  it('Crea el componente --- should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia inicializar el lenguage por defecto --- should set the default language on initialization', () => {
    spyOn(localStorage, 'getItem').and.returnValue('en');
    component.ngOnInit();
    expect(translate.use).toHaveBeenCalledWith('en');
  });

  it('Deberia navegar a crear una cuenta --- should navigate to /signup when goToAccount is called', () => {
    component.goToAccount();
    expect(router.navigate).toHaveBeenCalledWith(['/signup']);
  });

  it('Deberia agregar un valor cuando es selccionado uno de los elementos --- should set SelectedVal to true when addValue is called', () => {
    component.addValue({});
    expect(component.SelectedVal).toBeTrue();
  });

});

