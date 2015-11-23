define(['react'], function(React) {
  var Nav = React.createClass({
    render: function(){
      return <ul className="actions">
        <li className="button"><a href="#" onClick={this.props.showGrid}>grid</a></li>
        <li className="button"><a href="#" onClick={this.props.showRows}>rows</a></li>
      </ul>
    }
  });

  return Nav;
});