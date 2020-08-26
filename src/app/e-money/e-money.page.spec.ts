import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EMoneyPage } from './e-money.page';

describe('EMoneyPage', () => {
  let component: EMoneyPage;
  let fixture: ComponentFixture<EMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
