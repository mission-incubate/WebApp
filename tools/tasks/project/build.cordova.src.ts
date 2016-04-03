import * as gulp from 'gulp';
import {join} from 'path';
import { APP_DEST, Access, Options,
    Preference, Description, Version, Author,
    RawXml, CORDOVA_DEST, AndroidOptions, AndroidPlugins
} from '../../config';

const create = require('gulp-cordova-create');
const plugin = require('gulp-cordova-plugin');
const pref = require('gulp-cordova-preference');
const access = require('gulp-cordova-access');
const version = require('gulp-cordova-version');
const description = require('gulp-cordova-description');
const author = require('gulp-cordova-author');
const xml = require('gulp-cordova-xml');
const android = require('gulp-cordova-build-android');


export = () => {
    return gulp.src(join(APP_DEST))
        .pipe(create(Options))
        .pipe(plugin(AndroidPlugins))
        .pipe(pref(Preference))
        .pipe(access(Access))
        .pipe(version(Version))
        .pipe(description(Description))
        .pipe(author(Author.Name, Author.Email, Author.WebSite))
        .pipe(xml(RawXml))
        .pipe(android(AndroidOptions))
        .pipe(gulp.dest(CORDOVA_DEST))
        ;
}
