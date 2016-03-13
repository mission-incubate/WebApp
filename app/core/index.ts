import {Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {Body} from './body/body';
import {Footer} from './footer/footer';
import {Header} from './header/header';
import {Side} from './side/side';

@Component({
  selector: 'core',
  viewBindings: [Header, Side, Body, Footer],
  directives: [CORE_DIRECTIVES]
})
@View({
  templateUrl: './index.html',
  styleUrls: ['./core/core.css'],
})
export class Core {
  
  
}