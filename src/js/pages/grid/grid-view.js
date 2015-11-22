/* GRID VIEW PAGE */

define(
  [
    'app',
    'generics/generic-page-view',
    'jquery',
    'react',
    'jsx!pages/grid/grid',
    'ReactDOM'
  ],
  function(app, gpV, $, React, grid, ReactDOM){
    var view,
        viewClass;

    viewClass = gpV.extend({
      render: function(){
        gpV.prototype.render.call(this);

        var start = new Date();
        Grid = React.createFactory(grid);

        // Mount the JSX component in the app container
        ReactDOM.render(
            Grid({start: start}),
            document.getElementById('js-main'));
        
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