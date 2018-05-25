import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListerAnnonceComponent } from './lister-annonce.component';

describe('ListerAnnonceComponent', () => {
  let component: ListerAnnonceComponent;
  let fixture: ComponentFixture<ListerAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListerAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListerAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
