import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../../models/DialogData';

@Component({
  selector: 'add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.scss']
})
export class AddUserDialogComponent implements OnInit {

  userData:any = {};
  dataType:any;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.dataType = data;
    if(this.dataType.type=='add') {
      this.userData.type = 'add';
    } else {
      console.log('hhghghg',this.dataType);
      this.userData.type = 'edit';
      this.userData.username =  this.dataType.user.username;
    }
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(this.userData);
  }

}

