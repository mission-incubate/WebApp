import {Component, ApplicationRef, Input} from 'angular2/core';
import {Router} from 'angular2/router';
import { Http } from 'angular2/http';
//import {WHttp} from './../../wrapper/whttp';
import {Media, SidenavService, MATERIAL_DIRECTIVES } from 'ng2-material/all';

@Component({
    selector: 'gn-app',
    viewProviders: [],
    moduleId: module.id,
    templateUrl: './app.component.html',
    directives: [MATERIAL_DIRECTIVES]
})
export class Application {
    static SIDE_MENU_BREAKPOINT: string = 'gt-md';
    @Input()
    fullPage: boolean = Media.hasMedia(Application.SIDE_MENU_BREAKPOINT);
    // private height: number = window.innerHeight;
    // private width: number = window.innerWidth;
    private _subscription: any = null;
    constructor(http: Http,
        public media: Media,
        public router: Router,
        public appRef: ApplicationRef,
        private _sidenav: SidenavService
    ) {
        let query = Media.getQuery(Application.SIDE_MENU_BREAKPOINT);
        this._subscription = media.listen(query).onMatched.subscribe((mql: MediaQueryList) => {
            this.fullPage = mql.matches;
            this.appRef.tick();
        });
        //let components: any = []
        // this._components.getComponents()
        //     .then((comps) => {
        //         this.components = comps;
        //     });
    }
}
