System.config({
  map: {
    'rxjs': 'node_modules/rxjs',
    '@angular': 'node_modules/@angular',
    'app': 'dist'
  },
  packages: {
    '@angular/core': {
      main: 'bundles/core.umd.js'
    },
    '@angular/compiler': {
      main: 'bundles/compiler.umd.js'
    },
    '@angular/common': {
      main: 'bundles/common.umd.js'
    },
    '@angular/platform-browser': {
      main: 'bundles/platform-browser.umd.js'
    },
    '@angular/platform-browser-dynamic': {
      main: 'bundles/platform-browser-dynamic.umd.js'
    },
    '@angular/platform-server': {
      main: 'bundles/platform-server.umd.js'
    },
    '@angular/router': {
      main: 'index.js'
    },
    '@angular/http': {
      main: 'bundles/http.umd.js'
    },
    '@angular/forms': {
      main: 'bundles/forms.umd.js'
    },
    'rxjs': {
      main: 'Rx'
    },
    'app': {
      main: 'boot'
    }
  }
})
