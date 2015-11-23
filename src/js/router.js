define([
  'app',
  'backbone',
  'components/nav'
],
function(app, bb, nav) {

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
    },

    //helper functions
    loadModule: function(module){
      app.loadModule(module); 
    },

    loadNav: function(){
      nav.view.render();
    },

    index: function() {
      require(['pages/photo-viewer/view'], this.loadModule);
      this.loadNav();
    }
  });

  return Router;
});
