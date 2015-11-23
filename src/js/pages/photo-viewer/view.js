/* GRID VIEW PAGE */

define(
  [
    'app',
    'generics/generic-page-view',
    'jquery',
    'react',
    'ReactDOM',
    'jsx!pages/photo-viewer/photos',
    'stores/photo'
  ],
  function(app, gpV, $, React, ReactDOM, photos, photoStore){
    var view,
        viewClass;

    viewClass = gpV.extend({
      initialize: function(){
        var view = this;

        gpV.prototype.initialize.call(this);

        app.eventHub.on('photos:grid', function(){ view.reactRender('grid'); });
        app.eventHub.on('photos:rows', function(){ view.reactRender('rows'); });
      },

      render: function(){
        gpV.prototype.render.call(this);

        this.reactRender('grid');
      },

      reactRender: function(viewType){
        var data = photoStore();

        Photos = React.createFactory(photos);

        ReactDOM.render(
            Photos({photos: data, viewType: viewType}),
            document.getElementById('js-grid-container'));
      },

      templates: {
        main: "#template-grid-view" 
      }
    });

    view = new viewClass();

  
    return {
      view: view,
      name: 'grid-view'
    };
  }
);