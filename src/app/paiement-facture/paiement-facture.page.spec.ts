import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaiementFacturePage } from './paiement-facture.page';

describe('PaiementFacturePage', () => {
  let component: PaiementFacturePage;
  let fixture: ComponentFixture<PaiementFacturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementFacturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaiementFacturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
