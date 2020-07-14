import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomePageComponent } from './home-page.component';
// import { AuthGuard } from '../guard/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    // canActivate: [AuthGuard],
    children: [
        { path: '', redirectTo: 'homepage', pathMatch: 'full' },
        { path: 'homepage', loadChildren: './homepage/homepage.module#HomepageModule', data: { preload: true } },
        { path: 'monitor', loadChildren: './monitor/monitor.module#MonitorModule' },
        { path: 'device', loadChildren: './device/device.module#DeviceModule' },
        { path: 'user', loadChildren: './user/user.module#UserModule' },
        { path: 'application', loadChildren: './application/application.module#ApplicationModule' },
        { path: 'airreport', loadChildren: './airreport/airreport.module#AirreportModule' },
        { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
        { path: 'led', loadChildren: './led-test/led.module#LedModule' },
        { path: 'strategy', loadChildren: './strategy/strategy.module#StrategyModule' },
        { path: 'issuedata', loadChildren: './issuedata/issuedata.module#IssuedataModule' },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
