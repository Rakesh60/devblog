
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { RouteGuard } from '../RouteGuard'

const routes: Routes = [

  { path: 'articles', component: ArticleListComponent, canActivate: [RouteGuard] },
  { path: 'article/:id', component: ArticleDetailsComponent, canActivate: [RouteGuard] }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
