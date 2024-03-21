import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class RouteGuard implements CanActivate {
    constructor(private router: Router) { }

    canActivate(): boolean {
        // Check if user is logged in (you would typically check if the token is present)
        const isLoggedIn = !!localStorage.getItem('token');

        if (isLoggedIn) {
            return true; // Allow navigation to the requested route
        } else {
            // If user is not logged in, redirect to the login page
            this.router.navigate(['/login']);
            return false; // Prevent navigation
        }
    }
}
