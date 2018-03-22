import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from './../services/auth.service';

import { GazetteComponent }   from './gazette.component';
import { LoadingSpinnerComponent } from './../ui/loading-spinner/loading-spinner.component'; 

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    
    exports: [
      
    ],

    declarations: [
        GazetteComponent,
        LoadingSpinnerComponent
    ],

    providers: []
})

export class GazetteModule {}