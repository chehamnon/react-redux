import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const { postId } = this.props.params;

    const i = this.props.photos.findIndex((photo) => photo.photoId === postId);
    const photo = this.props.photos[i];

    return (
      <div className="single-photo">
        <Photo i={i} photo={photo} {...this.props} />
      </div>
    )
  }
});

export default Single;
