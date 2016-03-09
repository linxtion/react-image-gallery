# react-image-gallery

Responsive image gallery, slideshow, carousel

## Install

```sh
npm install react-image-gallery
```

## Demo & Examples

Live demo: [`linxtion.com/demo/react-image-gallery`](http://linxtion.com/demo/react-image-gallery)

To build the example locally, run:

```
npm install
```
```
gulp dev
```

You might need to run the following command if you do not have gulp installed globally.

```
npm install --global gulp
```

Then open [`localhost:8001`](http://localhost:8001) in a browser.


## Use

If you want ImageGallery to work with touch event, please install [react-tab-event-plugin](https://github.com/zilverline/react-tap-event-plugin) and follow the plugin's instruction how to inject the event mechanism.

### SASS

```
@import "../node_modules/react-image-gallery/src/ImageGallery";
```

### CSS

```
<link rel="stylesheet" href="/image-gallery.css"/>
```

### JS

```js
var ImageGallery = require('react-image-gallery');

var images = [
  {
    original: 'http://lorempixel.com/1000/600/nature/1/',
    thumbnail: 'http://lorempixel.com/250/150/nature/1/',
    originalClass: 'featured-slide',
    thumbnailClass: 'featured-thumb',
    originalAlt: 'original-alt',
    thumbnailAlt: 'thumbnail-alt',
    description: 'Optional description...'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/2/',
    thumbnail: 'http://lorempixel.com/250/150/nature/2/'
  },
  {
    original: 'http://lorempixel.com/1000/600/nature/3/',
    thumbnail: 'http://lorempixel.com/250/150/nature/3/'
  }
];

handleSlide: function(index) {
  console.log('Slid to ' + index);
},

render: function() {
  return (
    <ImageGallery
      items={images}
      autoPlay={true}
      slideInterval={4000}
      onSlide={this.handleSlide}/>
  );
}

```

# Props

* `items`: (required) Array of objects, see example above,
* `lazyLoad`: Boolean, default `true`
* `showNav`: Boolean, default `true`
* `showThumbnails`: Boolean, default `true`
* `showBullets`: Boolean, default `false`
* `showIndex`: Boolean, default `false`
* `server`: Boolean, default `false`
  * adds `loaded` class to all slide `<img>`
* `autoPlay`: Boolean, default `false`
* `disableThumbnailScroll`: Boolean, default `false`
  * disables the thumbnail container from adjusting
* `slideOnThumbnailHover`: Boolean, default `false`
  * slides to the currently hovered thumbnail
* `defaultImage`: String, default `undefined`
  * an image src pointing to your default image if an image fails to load
* `indexSeparator`: String, default `' / '`, ignored if `showIndex` is false
* `slideInterval`: Integer, default `4000`
* `startIndex`: Integer, default `0`
* `onSlide`: Function, `callback(index)`
* `onClick`: Function, `callback(event)`


# functions

* `play()`: continuous plays if image is not hovered.
* `pause()`: pauses the slides.
* `slideToIndex(index)`: slide to a specific index.

# Notes

* Feel free to contribute and or provide feedback!

# License

MIT
