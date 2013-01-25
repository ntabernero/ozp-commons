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
        require: '../target/js/require',
        jquery: '/base/target/js/jquery',
        backbone: '/base/target/js/backbone',
        lodash: '/base/target/js/lodash',
        handlebars: '/base/target/js/handlebars',
        bootstrap: '/base/target/vendor/assets/javascripts'
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
        }
    }
}, tests, function() {
    window.__testacular__.start();
});
