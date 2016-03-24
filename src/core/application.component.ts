import {Component, OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES/*, RouteConfig*/} from 'angular2/router';
import {LayoutComponent} from './component/layout/layout.component';

@Component({
    selector: 'gn-app',
    viewProviders: [],
    moduleId: module.id,
    styles: [
        `:host {
            display: block;
        }`
    ],
    template:
    `<gn-layout class="container-fluid"
        [style.width.px]="width" 
        [style.height.px]="height">
        (window:resize)="gnOnResize($event)"
        </gn-layout>
    `,
    directives: [ROUTER_DIRECTIVES, LayoutComponent]
})
// @RouteConfig([
//   { path: '/',      name: 'Layout',  component: LayoutComponent  },
//   { path: '/about', name: 'About', component: AboutComponent }
// ])
export class Application implements OnInit {
    height: number = window.innerHeight;
    width: number = window.innerWidth;

    ngOnInit() {
        this.gnOnResize();
    }
    private gnOnResize() {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
    }
}
