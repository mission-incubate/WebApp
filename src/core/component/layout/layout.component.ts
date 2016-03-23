import {Component } from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HeaderComponent} from './header/header.component';
import {ContainerComponent} from './container/container.component';
import {FooterComponent} from './footer/footer.component';
import { LeftSidebarmponent} from './sidebar/left/leftside.component';
import { RightSidebarmponent} from './sidebar/right/rightside.component';

@Component({
    selector: 'gn-layout',
    moduleId: module.id,
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css'],
    directives: [ROUTER_DIRECTIVES, HeaderComponent, LeftSidebarmponent, ContainerComponent, RightSidebarmponent, FooterComponent]
})
export class LayoutComponent { }
