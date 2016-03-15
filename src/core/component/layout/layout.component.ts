import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'gn-layout',
  moduleId: module.id,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LayoutComponent {}
