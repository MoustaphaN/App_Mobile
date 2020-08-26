import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YupPage } from './yup.page';

describe('YupPage', () => {
  let component: YupPage;
  let fixture: ComponentFixture<YupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
