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
    baseUrl: '/base/src/main/js',
    paths: {
        require: '../target/js/require',
        backbone: '/base/target/js/backbone'
        //text: '../lib/text'
    },
    shim: {
        backbone: {
            exports: 'Backbone'
        }
    }
}, tests, function() {
    window.__testacular__.start();
});
