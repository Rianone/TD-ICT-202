import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApercuComponent } from './apercu/apercu.component';
import { MixupComponent } from "./mixup/mixup.component"
import {NgxPrintModule} from 'ngx-print';

const routes: Routes = [
  {path: "", component: MixupComponent},
  {path: "apercu", component: ApercuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgxPrintModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
