import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InnerRouteComponentComponent} from './routing-test/inner-route-component/inner-route-component.component';

export const routes: Routes = [
  {path: 'routed', component: InnerRouteComponentComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  {useHash: true, enableTracing: false}, )
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
