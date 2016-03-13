import {Component, View, bootstrap} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_BINDINGS} from 'angular2/router';
// import {HTTP_BINDINGS} from 'http/http';

import {Home} from './components/home/home';
import {About} from './components/about/about';
import {Popup} from './components/popup/popup';
import {NameList} from './services/name_list';
import {Core } from './core/index'

@Component({
  selector: 'app',
  viewBindings: [NameList]
})
@RouteConfig([
  { path: '/', component: Home, as: 'home' },
  { path: '/about', component: About, as: 'about' },
  { path: '/popup', component: Popup, as: 'popup' },
  { path: '/core', component: Core, as : 'core'}
])
@View({
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  directives: [ROUTER_DIRECTIVES]
})
class App {}

bootstrap(App, [ROUTER_BINDINGS]);
