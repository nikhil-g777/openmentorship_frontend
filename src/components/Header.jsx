import React, { Component } from 'react';


class Header extends Component {
    render() {
        if (this.props.data) {
            var title = this.props.data.title,
                subtitle = this.props.data.subtitle,
                description = this.props.data.description,
                networks = this.props.data.social.map((network) => {
                return <li key={network.name} ><a  href={network.url} target="_blank"><i className={network.className}></i></a></li>
            });
        }
        return (
            <div>
                <header id="home">

                    <nav id="nav-wrap">

                        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                        <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>

                        <ul id="nav" className="nav">
                            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                            {/*<li><a className="smoothscroll" href="#about">About</a></li>
                            <li><a className="smoothscroll" href="#portfolio">Works</a></li>*/}
                            <li><a className="smoothscroll" href="#mentoring_advantages">Advantages</a></li>
                            {/*<li><a className="smoothscroll" href="#resume">Resume</a></li>*/}
                            <li><a className="smoothscroll" href="#information">Information</a></li>
                            <li><a className="smoothscroll" href="#steps">Steps</a></li>                            
                            <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                            {/*<li><a className="smoothscroll" href="#contact">Contact</a></li>*/}
                        </ul> 
                     
                    </nav> 
                    
                <div className="row banner">
                        <div className="banner-text">
                            <h1 className="responsive-headline">{title}.</h1>
                            <h3><span>{subtitle}</span> {description}.</h3>
                            <hr />
                            <ul className="social">
                            {networks}
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            </div>
        );
    }
}

export default Header;
