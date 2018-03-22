import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule } from '@angular/router';


import { MemberShipComponent }   from './membership.component';
import { LoginComponent }   from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({

    imports: [
        CommonModule,
         FormsModule,
         ReactiveFormsModule,
         RouterModule
    ],

    declarations: [
        MemberShipComponent,
        LoginComponent,
        RegisterComponent
       
    ],

    providers: []
})

export class MembershipModule {}