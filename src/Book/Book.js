import  React, {Component} from 'react';
import AddBook from '../AddBook/AddBook';
import './Book.css';

class Book extends Component {

  render() {  
    return (
      <>
        <h2>Book</h2>
        <AddBook></AddBook>
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