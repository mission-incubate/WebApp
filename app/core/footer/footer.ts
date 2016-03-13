import {Elements } from '../elements'
import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'footer'
})
@View({
  templateUrl: './core/footer/footer.html',
  directives: [CORE_DIRECTIVES]
})
export class Footer extends Elements {
 AddHeader(element : HTMLElement) {
   super.add(element);
 }
}