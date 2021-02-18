import  React, {Component} from 'react';
import './About.css';

class About extends Component {

  render() {  
    return (
      <>
        <h2>About</h2>
        <div className="about">
        <p>This is an app for managing a book colection</p>
        <br/>
        <h3>At the top, click on:</h3>
        <p>&nbsp;&nbsp;&nbsp;Nav options</p>
        <p>&nbsp;&nbsp;&nbsp;'reset' Nav options</p>
        <p>&nbsp;&nbsp;&nbsp;'about' Nav options</p>
        <br/>
        <h3>On the Menu Screen</h3>
        <h4>Menu Options:</h4>
        <p>&nbsp;&nbsp;&nbsp;1</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;or</p>
        <p>&nbsp;&nbsp;&nbsp;2</p>
        <br/>
        <p>&nbsp;&nbsp;&nbsp;Click on the '-' button</p>
        <br/>
        <h4>On smaller display widths:</h4>
        <p>&nbsp;&nbsp;&nbsp;Click on the name of</p>
        <br/>
        </div>
      </>
    );
  }  
}

export default About;