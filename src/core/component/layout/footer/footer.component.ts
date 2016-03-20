import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {StatusbarComponent} from './statusbar/statusbar.component';

@Component({
  selector: 'gn-footer',
  moduleId: module.id,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  directives: [ROUTER_DIRECTIVES, StatusbarComponent]
})
export class FooterComponent {}
