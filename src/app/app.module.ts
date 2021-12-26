import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {FormsModule} from '@angular/forms';

import { AddUserDialogComponent } from './shared/dialogs/add-user-dialog/add-user-dialog.component';
import { AddTaskDialogComponent } from './shared/dialogs/add-task-dialog/add-task-dialog.component';
import { ConfirmationAlertComponent } from './shared/confirmation-alert/confirmation-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    AddUserDialogComponent,
    AddTaskDialogComponent,
    ConfirmationAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    DragDropModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
