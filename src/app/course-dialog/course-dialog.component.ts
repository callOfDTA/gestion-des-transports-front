import { Component, OnInit, Inject, Input} from '@angular/core';
import { MatDialogRef , MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CourseDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}
