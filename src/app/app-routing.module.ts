import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'hello-world-component', component: HelloWorldComponent },
  {
    path: '*', component: EmptyRouteComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/angular' },
  ],
})
export class AppRoutingModule {}
