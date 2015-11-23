define(['react'], function(React) {
  /**
   * <PhotoMeta photo={aPhotoObject} />
   */
  var PhotoMeta = React.createClass({
    render: function() {
      var photo = this.props.photo,
          date = new Date(photo.date);

      date = date.toDateString() + ' ' + date.toLocaleTimeString();

      // JSX code
      return <ul className="meta">
        <li className="title"><b>"{photo.title}"</b></li>
        <li className="author"><b>Author:</b> {photo.authorName}</li>
        <li className="date"><b>Taken:</b> {date}</li>
        <li className="likes"><b>Likes:</b> {photo.likes}</li>
      </ul>;
    }
  });

  /**
   * <Photo photo={aPhotoObject} />
   */
  var Photos = React.createClass({
    render: function() {
      var viewClasses = 'photos ' + this.props.viewType;

      return <div className={viewClasses}>
        {this.props.photos.map(function(photo, i){
          return (
            <div className="item" key={photo.id}>
              <img src={photo.imageURL} alt={photo.title} />
              <PhotoMeta photo={photo} />
            </div>
          );
        }, this)}
      </div>
    }
  });

  return Photos;
});