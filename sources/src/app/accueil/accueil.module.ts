import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';


import { RouterModule } from '@angular/router';



import { AccueilComponent }   from './accueil.component';
import { LastPlantsComponent } from './last-plants/last-plants.component';

// Materialize Test
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {
	MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';


@NgModule({

    imports: [
      RouterModule,
      CommonModule,
      MatButtonModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatInputModule,
      MatRippleModule,
      MatNativeDateModule
    ],

    declarations: [
        AccueilComponent,
        LastPlantsComponent
    ],

    providers: []
})

export class AccueilModule {}