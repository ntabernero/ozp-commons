/*
 * Copyright 2013 Next Century Corporation 
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var tests = [];
for (var file in window.__testacular__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    enforceDefine: true
});

require({

    // !! Testacular serves files from '/base'
    baseUrl: '/base/src/main/webapp/js',
    paths: {
        require: '../target/libs/js/require',
        jquery: '/base/target/libs/js/jquery',
        backbone: '/base/target/libs/js/backbone',
        'backbone.declarative.views': '/base/target/libs/js/backbone.declarative.views',
        lodash: '/base/target/libs/js/lodash',
        handlebars: '/base/target/libs/js/handlebars',
        bootstrap: '/base/target/libs/js/bootstrap',
        jqueryatmosphere: '/base/target/libs/js/jquery.atmosphere'
        //text: '../lib/text'
    },
    shim: {
        jquery: {
            exports: '$'
        },
        lodash: {
            exports: '_'
        },
        handlebars: {
            exports: 'Handlebars'
        },
        backbone: {
            deps: ['lodash', 'jquery'],
            exports: 'Backbone'
        },
        'bootstrap/bootstrap-transition': {
            deps: ['jquery'],
            exports: '$'
        },
        'bootstrap/bootstrap-modal': {
            deps: ['jquery', 'bootstrap/bootstrap-transition'],
            exports: '$'
        },
        jqueryatmosphere: {
            deps: ['jquery'],
            exports: '$'
        },
        'backbone.declarative.views': {
            deps: ['lodash', 'backbone'],
            exports: 'Backbone'
        }
    }
}, tests, function() {
    window.__testacular__.start();
});
