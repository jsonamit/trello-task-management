import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'confirmation-alert',
  templateUrl: './confirmation-alert.component.html',
  styleUrls: ['./confirmation-alert.component.scss']
})
export class ConfirmationAlertComponent implements OnInit {

  alert: any = {};

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmationAlertComponent>,
  ) {
   
  }

  ngOnInit(): void {
  }

  closeDialog(type:string) {
    if(type=='Ok') {
      this.alert.type = 'Ok';
    } else {
      this.alert.type = 'Close';
    }
    this.dialogRef.close(this.alert);
  }

}

