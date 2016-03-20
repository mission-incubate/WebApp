import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'gn-container',
    moduleId: module.id,
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class ContainerComponent { }
