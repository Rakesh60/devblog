import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { RouteGuard } from './RouteGuard';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full', canActivate: [RouteGuard] },
  { path: '**', component: PagenotfoundComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
