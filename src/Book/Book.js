import  React, {Component} from 'react';
import Context from '../Context'
import AddBook from '../AddBook/AddBook';
import './Book.css';

class Book extends Component {
  static contextType = Context;

  render() {
    const error = this.context.error
          ? <div className="error">{this.context.error}</div>
          : "";

    return (
      <>
        {error}
        <h2>Books</h2>
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