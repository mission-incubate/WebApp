import {Elements } from '../elements'
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'body'
})
@View({
  templateUrl: './core/body/body.html',
  directives: [CORE_DIRECTIVES]
})
export class Body extends Elements {
 AddHeader(element : HTMLElement) {
   super.add(element);
 }
}