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
        <p>&nbsp;&nbsp;&nbsp;'patrons' to add or delete patrons</p>
        <p>&nbsp;&nbsp;&nbsp;'books' to add or delete books</p>
        <p>&nbsp;&nbsp;&nbsp;'checkin' or 'checkout' to check books in or out as needed</p>
        <p>&nbsp;&nbsp;&nbsp;'about' to return to the instructions page</p>
        <br/>
        </div>
      </>
    );
  }  
}

export default About;