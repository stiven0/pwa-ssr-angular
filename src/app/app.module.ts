import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { HomeComponent } from './pages/home/home.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { LoginComponent } from './pages/login/login.component';
// import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';

// angular material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// import { LogoutComponent } from './shared/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    // ProductsComponent,
    // ContactComponent,
    // LoginComponent,
    // NotPageFoundComponent,
    // LogoutComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('custom-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
