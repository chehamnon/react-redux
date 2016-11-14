import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

const Photo = React.createClass({
  render() {
    const { photo, i, comments } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${photo.photoId}`}>
            <img src={photo.image} alt={photo.title} className="grid-photo" />
          </Link>

          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}>
            <span key={photo.likes} className="likes-heart">{photo.likes}</span>
          </CSSTransitionGroup>
        </div>
      </figure>
    )
  }
});

export default Photo;
