
//import {join} from 'path';
import {ProjectConfig} from './project.config';

//Reference URL: https://github.com/SamVerschueren/gulp-cordova

export class CordovaConfig extends ProjectConfig {
    constructor() {
        super();
    }

    Options: any = {
        dir: 'webapp',
        id: 'com.webapp.first',
        name: 'Web App'
    };
    Access: any = {
        '*': false,
        'http://*.google.com': true,
        'tel:*': { 'launch-external': 'yes' }
    };
    Preference: any = {
        'AndroidLaunchMode': 'singleTop',
        'ShowTitle': true
    };
    Version: string = '0.0.1'; //Todo : retrive from package.json
    Description: string = 'This is my first Angular 2 application';
    RawXml: string[] = [
        '<access origin="http://www.google.com" />',
        '<access origin="http://www.github.com" />'
    ];
    Author: any = { Name: 'Natarajan Ganapathi', Email: 'natarajanmca11@gmail.com', WebSite: 'https://github.com/natarajanmca11' };
}
