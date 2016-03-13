import {Elements } from '../elements'
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'side'
})
@View({
  templateUrl: './core/side/side.html',
  directives: [CORE_DIRECTIVES]
})
export class Side extends Elements {
 AddHeader(element : HTMLElement) {
   super.add(element);
 }
}