import {Component
    //  , View
    //  , provide
} from 'angular2/core';
import {ROUTER_DIRECTIVES
    , RouteConfig
    , Location
    // , ROUTER_PROVIDERS
    //, LocationStrategy
    //, HashLocationStrategy
    , Router
    , AsyncRoute
    //, Router
    //, AuxRoute
} from 'angular2/router';

@Component(
    {
        selector: 'gn-lazyloader',
        directives: [ROUTER_DIRECTIVES]
    })
@RouteConfig([
    new AsyncRoute({
        path: '/lazy',
        loader: () => ComponentHelper.LoadComponentAsync('LazyLoaded', './components/lazy-loaded/lazy-loaded'),
        name: 'Lazy'
    })
])

class Application {
    router: Router;
    location: Location;

    constructor(router: Router, location: Location) {
        this.router = router;
        this.location = location;
    }

    getLinkStyle(path: any) {
        let outVal = false;
        if (path === this.location.path()) {
            outVal = true;
        } else if (path.length > 0) {
            outVal = this.location.path().indexOf(path) > -1;
        }
        return outVal;
    }
}

class ComponentHelper {
    static LoadComponentAsync(name: any, path: any) {
        return System.import(path).then((c: any) => c[name]);
    }
}
