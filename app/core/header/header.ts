import {Elements } from '../elements'
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'header'
})
@View({
  templateUrl: './core/header/header.html',
  directives: [CORE_DIRECTIVES]
})
export class Header extends Elements {
 AddHeader(element : HTMLElement) {
   super.add(element);
 }
}