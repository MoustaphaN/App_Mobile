import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeMoneyPage } from './free-money.page';

describe('FreeMoneyPage', () => {
  let component: FreeMoneyPage;
  let fixture: ComponentFixture<FreeMoneyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeMoneyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeMoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
