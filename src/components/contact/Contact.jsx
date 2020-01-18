import React, { Component } from 'react';
import ContactForm from './ContactForm';


class Contact extends Component {
  render() {
    if (this.props.data) {
            var name = this.props.data.name,
                street = this.props.data.address.street,
                city = this.props.data.address.city,
                state = this.props.data.address.state,
                zip = this.props.data.address.zip,
                phone = this.props.data.phone;
                
              }
  
    return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
               <div className="ten columns">
                  <p className="lead">
                  </p>
               </div>
            </div>

            <div className="row">
               <div className="eight columns">
                  <ContactForm />
                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
                  </div>
               </div>
            </div>
         </section>
    );
  }
}

export default Contact;
