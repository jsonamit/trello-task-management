import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { AddTaskDialogComponent } from 'src/app/shared/dialogs/add-task-dialog/add-task-dialog.component';
import { AddUserDialogComponent } from '../../shared/dialogs/add-user-dialog/add-user-dialog.component';
import { TaskService } from '../../services/task.service';
import { ConfirmationAlertComponent } from 'src/app/shared/confirmation-alert/confirmation-alert.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  userArray:any = [];
  name: string = '';
  connectedTo:any = [];
  LIST_IDS:any = [];
  task:any = [];

  constructor(public dialog: MatDialog,public taskservice:TaskService) {}
  
  ngOnInit(): void {
  }
  
  addUser(): void {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '250px',
      data: {type: 'add'},
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data && data.type=='add') { 
        let uniqueId = Math.floor(Math.random() * 1000);
        this.connectedTo.push(uniqueId);
        this.taskservice.createUser({ user_id:uniqueId, username:data.username,task:[]});
        this.userArray = this.taskservice.getUser();
      }
    });
  }

  editUser(i:number) {
    let user = this.userArray[i];
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      width: '250px',
      data: {type: 'edit',user},
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data && data.type=='edit') { 
        this.taskservice.editUser(i,data);
      }
    });
  }

  addTask(user:any) {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '250px',
      data: {type: 'add'},
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data && data.type=='add') {
        let uniqueId = Math.floor(Math.random() * 1000);
        this.taskservice.addTask({ task_id:uniqueId, name:data.taskname,user_id:user.user_id});
      }
    });
  }

  addId(user:any) {
    this.LIST_IDS.push('cdk-drop-list-' + user.user_id);
    return user.user_id;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  deleteUser(index:number) {
    const dialogRef = this.dialog.open(ConfirmationAlertComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data.type=='Ok') { 
        this.taskservice.deleteUser(index);
      }
    });
  }

  editTask(i:number,j:number) {
    let task = this.userArray[i].task[j];
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '250px',
      data: {type: 'edit',task},
    });

    dialogRef.afterClosed().subscribe(data => {
      if(data && data.type=='edit') { 
        this.taskservice.editTask(i,j,data);
      }
    });
  }

  deleteTask(i:number,task:any) {
    this.taskservice.deleteTask(i,task);
  }
 
}


