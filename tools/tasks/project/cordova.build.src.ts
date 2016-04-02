import * as gulp from 'gulp';
import {join} from 'path';
import { APP_DEST, Access, Options, Preference, Description, Version, Author, RawXml  } from '../../config';

const create = require('gulp-cordova-create');
const pref = require('gulp-cordova-preference');
const access = require('gulp-cordova-access');
const version = require('gulp-cordova-version');
const description = require('gulp-cordova-description');
const author = require('gulp-cordova-author');
const xml = require('gulp-cordova-xml');

export = () => {
    return gulp.src(join(APP_DEST))
        .pipe(create(Options))
        .pipe(pref(Preference))
        .pipe(access(Access))
        .pipe(version(Version))
        .pipe(description(Description))
        .pipe(author(Author.Name, Author.Email, Author.WebSite))
        .pipe(xml(RawXml))
        ;
}
