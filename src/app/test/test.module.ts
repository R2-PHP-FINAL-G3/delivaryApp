import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrComponent } from './or/or.component';

import { RouterModule ,Routes} from '@angular/router';

const routes:Routes =[
{path:'o',title:'o',component:OrComponent}
]
@NgModule({
  declarations: [
    OrComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TestModule { }
