import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressComponent} from './progress.component';
import {CodeKataProgressComponent} from './code-kata-progress/code-kata-progress.component';
import {TaskProgressComponent} from './task-progress/task-progress.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ProgressComponent,
    CodeKataProgressComponent,
    TaskProgressComponent
  ],
  exports: [
    ProgressComponent
  ]
})
export class ProgressModule {
}
