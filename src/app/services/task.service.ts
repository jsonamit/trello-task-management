import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  taskArray:any = [];
  taskData:any = [];

  constructor() {

  }
 
  createUser(data:any) {
    this.taskArray.push(data);
  }

  getUser() {
      return this.taskArray;
  }

  addTask(task:any) {
    this.taskData = [];
    this.taskArray.map((element:any,index:number)=>{
      if(element.user_id===task.user_id) {
        this.taskArray[index].task.push(task); 
      }
    })
  }

  deleteUser(index:number) {
    this.taskArray.splice(index,1); 
  }

  editTask(i:number,j:number,data:any) {
    this.taskArray[i].task[j].name=data.taskname;
  }

  deleteTask(i:number,task:any) {
    this.taskArray[i].task.splice(this.taskArray[i].task.indexOf(task),1);
  }
  
}
