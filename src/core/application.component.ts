import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES/*, RouteConfig*/} from 'angular2/router';
import {LayoutComponent} from './component/layout/layout.component';

@Component({
    selector: 'gn-app',
    viewProviders: [],
    moduleId: module.id,
    template: '<gn-layout class="mdb-layout-container"></gn-layout>',
    directives: [ROUTER_DIRECTIVES, LayoutComponent]
})
// @RouteConfig([
//   { path: '/',      name: 'Layout',  component: LayoutComponent  },
//   { path: '/about', name: 'About', component: AboutComponent }
// ])
export class Application { }
