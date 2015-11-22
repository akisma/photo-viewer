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
  var Photo = React.createClass({
    render: function() {
      var photo = this.props.photo;
      // JSX code
      return <div className="item">
        <img src={photo.imageURL} alt={photo.title} id={photo.id} />
        <PhotoMeta photo={photo} />
      </div>;
    }
  });

  return Photo;
});