import React, { Component } from 'react';
import {Modal, ModalBody, Button, ModalHeader, ModalFooter} from 'reactstrap';

class Grid extends Component {
  render() {
    if (this.props.data) {
        var portfolio = this.props.data.elements.map((element) => {
            let imageUrl = 'images/advantages/' + element.image;
            let modalUrl = '#' + element.modal;
            return (
                <div key={element.title}>
                    <div className="columns portfolio-item">
                        <div className="item-wrap">

                            <a onClick={this.toggle} href={modalUrl} title={element.title}>
                                <img alt={element.title} src={imageUrl}/>
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{element.title}</h5>
                                        <p>{element.category}</p>
                                    </div>
                                </div>
                                
                            </a>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            )
        });
    }
    return (
      <section id="portfolio">
        <div className="row">
           <div className="twelve columns collapsed">
              <h1>The importance of Mentorship.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                   {portfolio}
              </div> 
           </div>
        </div>
      </section>
    );
  }
}

export default Grid;
