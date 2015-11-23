/* header nav */

define(
  [
    'app',
    'generics/generic-view',
    'jquery',
    'react',
    'ReactDOM',
    'jsx!components/nav-actions',
    'stores/photo'
  ],
  function(app, gV, $, React, ReactDOM, nav, photoStore){
    var view,
        viewClass;

    viewClass = gV.extend({
    	el: $('header').eq(0),

      render: function(){
        Nav = React.createFactory(nav);

        ReactDOM.render(
            Nav({ showGrid: this.showGrid, showRows: this.showRows }),
            document.getElementById('js-actions'));
      },

      showGrid: function(){
      	app.eventHub.trigger('photos:grid');
      },

      showRows: function(){
      	app.eventHub.trigger('photos:rows');
      }
    });

    view = new viewClass();

  
    return {
      view: view,
      name: 'nav'
    };
  }
);