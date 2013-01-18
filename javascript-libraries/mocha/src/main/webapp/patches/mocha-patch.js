// In Firefox 3.6-10, an error in loading script causes
// window.onerror to execute which fails test in Mocha
process.on = function(e, fn){
    if ('uncaughtException' == e) {
        window.onerror = function(err, url, line){
            if(err === 'Error loading script')
                return;
            fn(new Error(err + ' (' + url + ':' + line + ')'));
        };
    }
};