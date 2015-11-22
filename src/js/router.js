define([
  'app',
  'backbone'
],
function(app, bb) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index'
    },

    //helper functions
    loadModule: function(module){
      app.loadModule(module); 
    },

    index: function() {
      require(['pages/grid/grid-view'], this.loadModule);
    }
  });

  return Router;
});
