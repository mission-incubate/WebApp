import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'gn-left',
    moduleId: module.id,
    template: '<div>Left side </div>',
    styleUrls : ['./leftside.component.scss'],
    directives: [ROUTER_DIRECTIVES]
})
export class LeftSidebarmponent { }
