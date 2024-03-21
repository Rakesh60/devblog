
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouteGuard } from '../RouteGuard';

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent, canActivate: [RouteGuard] },
  { path: 'contact-us', component: ContactUsComponent, canActivate: [RouteGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticpagesRoutingModule { }
