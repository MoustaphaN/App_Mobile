import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrangeMoneyPage } from './orange-money.page';

describe('OrangeMoneyPage', () => {
  let component: OrangeMoneyPage;
  let fixture: ComponentFixture<OrangeMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrangeMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrangeMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
