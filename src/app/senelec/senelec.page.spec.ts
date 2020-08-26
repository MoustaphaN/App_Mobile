import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SenelecPage } from './senelec.page';

describe('SenelecPage', () => {
  let component: SenelecPage;
  let fixture: ComponentFixture<SenelecPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenelecPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SenelecPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
