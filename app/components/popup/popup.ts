import {Component, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'popup'
})
@View({
  templateUrl: './components/popup/popup.html',
  directives: [CORE_DIRECTIVES]
})
export class Popup {
  constructor() {}
  addName():boolean {
    return false;
  }
}
