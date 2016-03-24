import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'gn-right',
    moduleId: module.id,
    template: '<div>Right side </div>',
    styleUrls : ['./rightside.component.scss'],
    directives: [ROUTER_DIRECTIVES]
})
export class RightSidebarmponent { }