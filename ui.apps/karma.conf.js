// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        // reporters: ['progress', 'mocha', 'coverage'], // Enable this to see timing of inidividual reports
        reporters: ['progress', 'kjhtml'],
        plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-jasmine-html-reporter'),
          require('karma-coverage-istanbul-reporter'),
          require('@angular-devkit/build-angular/plugins/karma')
        ],
        client: {
          clearContext: false // leave Jasmine Spec Runner output visible in browser
        },
        coverageIstanbulReporter: {
          dir: require('path').join(__dirname, '../coverage'),
          reports: ['html', 'lcovonly'],
          fixWebpackSourcePaths: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        //browsers: ['PhantomJS'],
        singleRun: false
    });
};