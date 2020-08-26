import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WoyafalPage } from './woyafal.page';

describe('WoyafalPage', () => {
  let component: WoyafalPage;
  let fixture: ComponentFixture<WoyafalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoyafalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WoyafalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
