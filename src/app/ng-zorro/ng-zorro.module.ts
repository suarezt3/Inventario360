import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importaciones de modulos NG-ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';



@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule
  ],
  exports: [
    NzLayoutModule,
    NzIconModule
  ]

})
export class NgZorroModule { }
