import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

import { PagesRoutingModule } from './pages.routing.module';
import { LogoutComponent } from '../shared/logout/logout.component';

import { VerifyEmailGuard } from '../core/guards/verify-email.guard';
import { VerifyEmailPageLoginGuard } from '../core/guards/verify-email-page-login.guard';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
    declarations: [
        ContactComponent,
        HomeComponent,
        LoginComponent,
        ProductsComponent,
        NotPageFoundComponent,
        LogoutComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        PagesRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [
        VerifyEmailPageLoginGuard,
        VerifyEmailGuard
    ]
})
export class PagesModule {}