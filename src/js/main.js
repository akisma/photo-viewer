// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

require.config({
  baseUrl: '/src/js/',
  // Initialize the application with the main application file.
  deps: ['main'],

  jsx: {
    fileExtension: '.jsx'
  },

  paths: {

    // Libraries.
    jquery:         'vendor/jquery-2.1.4',
    underscore:     'vendor/underscore-1.8.3',
    backbone:       'vendor/backbone-1.2.3',
    text:           'vendor/require-text',
    jsx:            'vendor/jsx',
    JSXTransformer: 'vendor/JSXTransformer-0.13.3',
    react:          'vendor/react-with-addons-0.14.3',
    ReactDOM:       'vendor/react-dom-0.14.3',

    //My components
    errors:       'components/errors'
  },

  shim: {
    // Backbone library depends on underscore and jQuery.
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    ReactDOM: {
      deps: ['react'],
      exports: 'ReactDOM'
    }
  }
});

require([
  // Application.
  'app',

  // Main Router.
  'router'
],

function(app, Router, issues) {

  // Define your master router on the application namespace and trigger all
  // navigation from this instance.
  app.router = new Router();

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on('click', 'a:not([data-bypass])', function(evt) {
    // Get the absolute anchor href.
    var href = $(this).attr('href');

    // If the href exists and is a hash route, run it through Backbone.
    if (href && href.indexOf('#') === -1) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events. The Router's internal `navigate` method
      // calls this anyways.  The fragment is sliced from the root.
      Backbone.history.navigate(href, true);
    }
  });

  if (!Backbone.History.started){
    Backbone.history.start({ pushState: true, root: app.root });
  } 
});

