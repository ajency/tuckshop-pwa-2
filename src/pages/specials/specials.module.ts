import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialsPage } from './specials';

@NgModule({
  declarations: [
    SpecialsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialsPage),
  ],
})
export class SpecialsPageModule {}
