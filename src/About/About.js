import  React, {Component} from 'react';
import './About.css';

class About extends Component {

  render() {  
    return (
      <>
        <h2>About</h2>
        <div className="about">
        <p>This is an app to assist a librarian who manages a book collection.  It helps track the library's patrons and what books they've checked out</p>
        <br/>
        <h3>At the top, click on:</h3>
        <p>&nbsp;&nbsp;&nbsp;'patrons' to add patron information to the database.  To view added or existing patrons, use the search interface.  The '-' button will remove searched patrons from the database.</p>
        <p>&nbsp;&nbsp;&nbsp;'books' to add book records to the collection. To view added or existing books, use the search interface.  The '-' button will remove searched books from the database.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Neither patron or book records can be removed if they have checked out books associated with them.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Leave search fields blank if you would like to see all records for either patrons or books respectively</p>
        <p>&nbsp;&nbsp;&nbsp;'checkin' or 'checkout' to check books in or out as needed</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;first select a patron, then you can search/select books the patron would like to checkin or out.</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;use the '-' or '+' button to check selected books in or out as apporpiate</p>
        <p>&nbsp;&nbsp;&nbsp;'about' to return to the instructions page</p>
        <br/>
        </div>
      </>
    );
  }  
}

export default About;