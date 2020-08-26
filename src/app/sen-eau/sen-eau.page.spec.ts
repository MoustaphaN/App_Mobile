import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenEauPage } from './sen-eau.page';

describe('SenEauPage', () => {
  let component: SenEauPage;
  let fixture: ComponentFixture<SenEauPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenEauPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenEauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
