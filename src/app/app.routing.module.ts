import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// import { LoginComponent } from './pages/login/login.component';
// import { HomeComponent } from './pages/home/home.component';
// import { ProductsComponent } from './pages/products/products.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { NotPageFoundComponent } from './pages/not-page-found/not-page-found.component';
// import { VerifyEmailGuard } from './core/guards/verify-email.guard';
// import { VerifyEmailPageLoginGuard } from './core/guards/verify-email-page-login.guard';

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule ) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    // useHash: true, 
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabled'
})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
