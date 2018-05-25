import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerCovoiturageComponent } from './creer-covoiturage.component';

describe('CreerCovoiturageComponent', () => {
  let component: CreerCovoiturageComponent;
  let fixture: ComponentFixture<CreerCovoiturageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerCovoiturageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerCovoiturageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
