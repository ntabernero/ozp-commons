// Testacular configuration
// Generated on Mon Dec 17 2012 13:47:49 GMT-0500 (EST)


// base path, that will be used to resolve files and exclude
basePath = '.';


// list of files / patterns to load in the browser
files = [
  MOCHA,
  MOCHA_ADAPTER,
  "target/classes/js/**/expect-amd/**/*.js",
  "target/classes/js/**/sinon-amd/**/*.js",
  "target/classes/js/**/require/**/*.js",
  "target/classes/js/**/lodash-amd/**/*.js",
  "target/classes/js/**/jquery-amd/**/*.js",
  "src/main/js/plugin.js",
  "src/test/js/*.js"
];


// list of files to exclude
exclude = [
  
];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'junit'];

junitReporter= {
     outputFile: 'target/surefire-reports/test-results.xml',
     suite: ''
};

// web server port
port = 8899;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 10000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;
