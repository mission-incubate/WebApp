import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {StatusbarComponent} from '../statusbar/statusbar.component';

@Component({
  selector: 'gn-layout',
  moduleId: module.id,
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  directives: [ROUTER_DIRECTIVES, StatusbarComponent]
})
export class LayoutComponent {}
