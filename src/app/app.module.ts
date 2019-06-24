import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { TopurlsComponent } from './topurls/topurls.component';
import { BottomComponent } from './bottom/bottom.component';

const appRoutes: Routes = [
  { path: 'posts', component: PostsComponent },
  { path: 'users',      component: UsersComponent },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },  
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    UsersComponent,
    TopurlsComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
        RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
