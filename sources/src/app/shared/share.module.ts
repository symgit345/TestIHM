import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';

import { Error404Component }   from './error404/error404.component';
import { NavComponent } from './nav/nav.component';

@NgModule({

    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent,
    ],

    declarations: [
        NavComponent,
        Error404Component
    ],

    providers: []
})

export class ShareModule {}