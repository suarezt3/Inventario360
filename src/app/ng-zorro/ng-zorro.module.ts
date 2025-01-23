import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Importaciones de modulos NG-ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';





@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
  ],
  exports: [
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
    NzMenuModule,
  ]

})
export class NgZorroModule { }
