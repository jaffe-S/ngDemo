import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectivePreloadingStrategyService } from './shared/servive/selective-preloading-strategy.service';
import { NotFoundComponent } from './workspace/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    loadChildren: './workspace/home-page/home-page.module#HomePageModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
//  懒加载loadChildren的属性值由三部分组成：需要导入模块的相对路径、#分隔符、导出模块类的名称
// { path: 'home', loadChildren: './home/home.module#HomeModule', data: { preload: true } }, // 懒加载 + 预加载
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // 预加载
    preloadingStrategy: SelectivePreloadingStrategyService
  })],
  exports: [RouterModule],

  providers: [
    SelectivePreloadingStrategyService
  ]

})
export class AppRoutingModule { }
