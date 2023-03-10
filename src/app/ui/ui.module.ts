import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";
import {DropdownModule} from "primeng/dropdown";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ContextMenuModule} from "primeng/contextmenu";
import {CalendarModule} from "primeng/calendar";
import {CheckboxModule} from "primeng/checkbox";
import {TagModule} from "primeng/tag";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FieldsetModule} from "primeng/fieldset";
import {components} from './components-list';


@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    FieldsetModule,
    InputTextModule,
    InputNumberModule,
    InputSwitchModule,
    DropdownModule,
    RippleModule,
    ToastModule,
    ContextMenuModule,
    CalendarModule,
    CheckboxModule,
    TagModule,
    InputTextareaModule,
    ConfirmDialogModule,
  ]
})
export class UiModule { }
