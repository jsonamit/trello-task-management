import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../../../models/DialogData';

@Component({
  selector: 'add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.scss']
})
export class AddTaskDialogComponent implements OnInit {

  taskData: any = {};
  dataType:any;

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.dataType = data;
    if(this.dataType.type=='add') {
      this.taskData.type = 'add';
    } else {
      this.taskData.type = 'edit';
      this.taskData.taskname =  this.dataType.task.name;
    }
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close(this.taskData);
  }

}

