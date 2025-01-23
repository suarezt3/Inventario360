import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//!Importaciones de modulos NG-ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';



@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
    NzDatePickerModule,
    NzSelectModule,
    NzInputModule
  ],
  exports: [
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
    NzDatePickerModule,
    NzSelectModule,
    NzInputModule
  ]

})
export class NgZorroModule { }
