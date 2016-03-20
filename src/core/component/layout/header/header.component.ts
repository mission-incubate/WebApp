import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
    selector: 'gn-header',
    moduleId: module.id,
    template: '<gn-navbar></gn-navbar>',
    styles : [],
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class HeaderComponent { }
