import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// 业务开发模块导入
import { AppRoutingModule } from './app-routing.module';


// 模块内组件、指令、管道等导入
import { AppComponent } from './app.component';
import { NotFoundComponent } from './workspace/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
