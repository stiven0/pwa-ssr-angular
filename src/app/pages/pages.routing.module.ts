import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { NotPageFoundComponent } from './not-page-found/not-page-found.component';

import { VerifyEmailPageLoginGuard } from '../core/guards/verify-email-page-login.guard';
import { VerifyEmailGuard } from '../core/guards/verify-email.guard';

const routes: Routes = [
    { path: '',         component: LoginComponent,      canActivate: [ VerifyEmailPageLoginGuard ] },
    { path: 'home',     component: HomeComponent,       canActivate: [ VerifyEmailGuard ] },
    { path: 'products', component: ProductsComponent,   canActivate: [ VerifyEmailGuard ] },
    { path: 'contact',  component: ContactComponent,    canActivate: [ VerifyEmailGuard ]},
    { path: '**',       component: NotPageFoundComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
