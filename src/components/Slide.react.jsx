import React from 'react';
import Image from './Image';

import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  displayName: 'Slide',

  mixins: [PureRenderMixin],

  getInitialState () {
    imageCssClass: this.props.server ? 'loaded' : ''
  },

  cssClasses () {
    let classNames = ['image-gallery-slide'];
    classNames.push(this.props.alignment;

    if (this.props.originalClass) {
      classNames.push(this.props.originalClass);
    }

    return classNames.join(' ');
  },

  handleImageLoad (event) {
    // slide images have an opacity of 0, onLoad the class 'loaded' is added
    // so that it transitions smoothly when navigating to non adjacent slides
    // TODO: Check if setState is OK for this usecase. If it is, I think this is
    // more react-way.
    this.setState({
      imageCssClass: 'loaded'
    })
  },

  render () {
    <div
      className={this.cssClasses()}
      onClick={this.props.onClick}
      onTouchTap={this.props.onTouchTap || this.props.onClick}
    >
      <Image
        className={this.state.imageCssClass}
        src={this.props.item.original}
        alt={this.props.item.originalAlt}
        onLoad={this.handleImageLoad}
      />
      {this.props.item.description}
    </div> 
  }
});
