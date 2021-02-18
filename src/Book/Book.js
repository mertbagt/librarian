import  React, {Component} from 'react';
import './Book.css';

class Book extends Component {

  render() {  
    return (
      <>
        <h2>Book</h2>
        <div className="editBook">
          <p>Form for adding/editing library books</p>
        </div>
        <br />        
        <div className="searchBook">
          <p>Query for searching Books</p>
        </div>
        <div className="resultsBook">
          <p>Query Results</p>
        </div>
      </>
    );
  }  
}

export default Book;