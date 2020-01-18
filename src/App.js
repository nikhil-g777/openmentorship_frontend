import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import About from "./components/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Slide from "./components/Slide";
import Grid from "./components/Grid";
import Testimonials from "./components/Testimonials";
import Resume from "./components/Resume";
import Information from "./components/Information";
import axios from 'axios';

let page_data = {
  "main": {
    "title":"OpenMentorship",
    "subtitle":"Smart Work is more valuable than Hard Work!",
    "description":"With the help of this open source project, Find a Mentor who can guide you to success. We are still in the initial development phase of the platform and if you are intersted in contributing towards project, mentoring or looking for a mentor, please send an email to nikhil.g777@gmail.com",
    "email": "nikhil.g777@gmail.com",
    "phone": "555-555-5555",
    "address":{
      "street":"Street",
      "city":"city",
      "state":"state",
      "zip": "zip"
    },
    "website": "http://www.openmentorship.com",
    "resumeDownload":"https://www.google.com",
    "social":[
      {
        "name":"github",
        "url":"https://github.com/nikhil-g777/openmentorship_frontend",
        "className":"fa fa-github"
      }
    ]
  },
  "information": [
    {
      "title": "Importance",
      "description": "In this world of rapidly advancing technologies and developments, it is very important to stay up to date and keep learning. Be it college students or young professionals, we are often confused anout what courses to take and what skills to acquire. This is where mentorship plays a big role and people with experience in the industry have a much better understanding and can greatly help in guiding and advising mentees in their careers"

    }
  ],
  "testimonials":{
    "testimonials":[
      {
        "text":"Mentorship is the key to extraordinary success",
        "user":"Mike Murdock"
      },
      {
        "text":"Every great achiever is inspired by a great mentor",
        "user":"Laila Gifty Akita"
      }
    ]
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      modal: false,
      name: '',
      email: '',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
    this.setState({
        data: page_data
    })
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  async handleSubmit(e) {
    e.preventDefault()
    const {name, email, message} = this.state
    const form = await axios.post('/api/form', {
      name,
      email,
      message
    })
  }

//   renderModal(){
//     if(this.state.modal) {
//         return(
//             <Modal1 text={"Modal Text"} onClose={()=> this.setState({modal: false})} />
//         )
//     }
//     return null;
// }

  render() {
    return (
      <div className="App">
        <Header data={this.state.data.main}/>
        {/* <About data={this.state.data.main} /> */}
        <Slide id="mentoring_advantages" image="mentoring_advantages.jpg" /> 
        {/* <Resume data={this.state.data.resume}/> */}
        <Information data={this.state.data.information}/>
        <Slide id="steps" image="steps.jpg" />
        {/* <Grid data={this.state.data.advantages}/> */}
        <Testimonials data={this.state.data.testimonials} />
        {/* <Contact data={this.state.data.main} sendMail={this.sendMail}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
