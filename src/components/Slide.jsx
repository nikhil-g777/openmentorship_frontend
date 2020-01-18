import React, { Component } from 'react';


class Slide extends Component {
  render() {
    let id = this.props.id;
    let imageUrl = 'images/' + this.props.image;
    return (
    <section id={id} className="slide">
        <div className="slide_image">
            <img src={imageUrl} />
        </div>
     </section>
    );
  }
}

export default Slide;
