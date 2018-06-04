import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';
import { VehiculePipe, AdressePipe } from '../pipe/format.pipe';
import { Annonce } from '../models';

@Component({
  selector: 'app-confirmation-annonce-dialog',
  templateUrl: './confirmation-annonce-dialog.component.html',
  styleUrls: ['./confirmation-annonce-dialog.component.css']
})
export class ConfirmationAnnonceDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmationAnnonceDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
