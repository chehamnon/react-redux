import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {this.props.photos.map((photo, i) => <Photo {...
         this.props} key={i} i={i} photo={photo} />)}
      </div>
    )
  }
});

export default PhotoGrid
