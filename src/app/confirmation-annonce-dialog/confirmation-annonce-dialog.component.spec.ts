import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationAnnonceDialogComponent } from './confirmation-annonce-dialog.component';

describe('ConfirmationAnnonceDialogComponent', () => {
  let component: ConfirmationAnnonceDialogComponent;
  let fixture: ComponentFixture<ConfirmationAnnonceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationAnnonceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationAnnonceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
