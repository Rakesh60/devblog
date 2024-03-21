import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 constructor(private router:Router){}
  navbarCollapsed = true;
 
  toggleNavbarCollapsing() {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
  logout(): void {
    // Clear authentication state (e.g., remove token from localStorage)
    localStorage.removeItem('token');
    // Redirect to login page
    this.router.navigate(['/login']);
  }
 
}
