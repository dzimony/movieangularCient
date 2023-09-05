import { Component,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Models/DialogData';


@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent {
 
 constructor(
 public dialogRef: MatDialogRef<ImageDialogComponent>,
 @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

onNoClick(): void {
 this.dialogRef.close();
}
}