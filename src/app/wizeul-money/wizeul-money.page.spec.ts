import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WizeulMoneyPage } from './wizeul-money.page';

describe('WizeulMoneyPage', () => {
  let component: WizeulMoneyPage;
  let fixture: ComponentFixture<WizeulMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizeulMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WizeulMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
