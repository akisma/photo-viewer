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
  function(app, gpV, $, React, ReactDOM, photo, photoStore){
    var view,
        viewClass;

    viewClass = gpV.extend({
      render: function(){
        gpV.prototype.render.call(this);

        //get photos
        var photos = photoStore();

        // for (var photo in photos){
          Photo = React.createFactory(photo);

          // Mount the JSX component in the app container
          ReactDOM.render(
              Photo({photo: photos[0]}),
              document.getElementById('js-grid'));
        // }
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