/* GRID VIEW PAGE */

define(
  [
    'app',
    'generics/generic-page-view',
    'jquery',
    'react',
    'ReactDOM',
    'jsx!pages/grid/grid',
    'stores/photo'
  ],
  function(app, gpV, $, React, ReactDOM, photos, photoStore){
    var view,
        viewClass;

    viewClass = gpV.extend({
      render: function(){
        gpV.prototype.render.call(this);

        var data = photoStore();

        Photos = React.createFactory(photos);

        ReactDOM.render(
            Photos({photos: data}),
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