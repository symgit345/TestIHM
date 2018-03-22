import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

// Module
import { ShareModule }    from './shared/share.module';
import { AccueilModule }    from './accueil/accueil.module';
import { GazetteModule }    from './gazette/gazette.module';
import { MembershipModule }    from './membership/membership.module';

// Component
import { AppComponent } from './app.component';

// Services 
import { AuthService } from './services/auth.service';
import { ItemService } from './services/item.service';

// Firebase
import { environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore'; 
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({

    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ShareModule,
        AccueilModule,
        GazetteModule,
        MembershipModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule, AngularFireAuthModule,
        AngularFirestoreModule    
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent],
    providers: [AuthService, ItemService]
})

export class AppModule {}