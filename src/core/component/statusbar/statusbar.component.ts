import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  selector: 'gn-statusbar',
  moduleId: module.id,
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.scss'],
  directives: [ROUTER_DIRECTIVES]
})
export class StatusbarComponent {}
