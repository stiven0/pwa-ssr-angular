import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HandleStorageService {

    constructor(
        private router: Router
    ){}

    setEmail( email: string ): void {
        localStorage.setItem('email', email);
    }

    getEmail(): string | null { 
        return localStorage.getItem('email') || null;
    }

    removeEmail(): void {
        localStorage.removeItem('email');
    }

    logout() {
        this.removeEmail();
        this.router.navigateByUrl('/');
    }

}