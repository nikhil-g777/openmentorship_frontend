import React, { Component } from 'react';


class Information extends Component {
  render() {
    if (this.props.data) {
      var elements = this.props.data.map((element) => {
          console.log(element);
          return (
            <div key={element.title} className="row item">
            <div  className="twelve columns">
                <h3>{element.title}</h3>
                {/*<h3>{element.subtitle}</h3>*/}
                <p> {element.description} </p>
            </div>
         </div> 
          )
      })
  }
    return (
        <section id="information">
        {/* <!-- Information
        ----------------------------------------------- --> */}
        <div className="row education">
           <div className="twelve columns main-col">
              {elements}
           </div> 
        </div>  
     </section>
    );
  }
}

export default Information;
