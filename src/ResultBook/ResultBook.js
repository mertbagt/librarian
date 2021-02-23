import  React, {Component} from 'react';
import Context from '../Context'
import ValidationError from '../ValidationError/ValidationError';
import './ResultBook.css';

class ResultBook extends Component {
  static contextType = Context;

  handleDelete = e => {
    e.preventDefault();

    const id = this.props.id;
    const results = [];
    const newStatus = "Deleted book: " + this.props.title;

    this.context.deleteBook(id);
    this.context.updateBookResults(results);
    this.context.updateError(newStatus);
  }

  handleSubmit = e => {
    e.preventDefault();

    const patronId = this.context.currentPatron.id
    const bookId = this.props.id;
    const bookCheckedOut = {patronId, bookId}
    const results = [];
    const newStatus = "Checked out book: " + this.props.title;

    this.context.checkBook(bookCheckedOut);
    this.context.updateBookResults(results);
    this.context.updateError(newStatus);
  }

  checkStatus() {
    if (this.context.booksCheckedOut.length > 0) {
      let checkedOut = false; 
      let patrons = this.context.patrons;
      const check = this.context.booksCheckedOut.find(book => book.bookId === this.props.id);
    
      if (check !== undefined) {
        checkedOut = (check.bookId > -1)
          ? true
          : false;

        patrons = this.context.patrons.filter(patron => patron.id === check.patronId); 
      }

      if (checkedOut === true) {
        return "This book is checked out by " + patrons[0].first + " " + patrons[0].last;
      }
    }  
  }

  render() {
    const checkStatus = this.checkStatus();  
    const bookButton = (this.props.path === "/book")
          ? <button className='deleteBook' type='button' onClick={this.handleDelete} disabled={this.checkStatus()}>-</button> 
          :<button className='submitBook' type='button' onClick={this.handleSubmit} disabled={this.checkStatus()}>+</button>

    return (
      <>  
        <tr key={this.props.subkey}>
          <td>{bookButton} {this.props.title} <ValidationError message={checkStatus} /></td> 
        </tr>  
        <tr>
          <td>Page Count: {this.props.pageCount}</td> 
        </tr>
        <tr>
          <td>Genre: {this.props.genre}</td>
        </tr>
        <tr>
          <td>ISBN: {this.props.ISBN}</td>
        </tr>
      </>
    );
  }  
}

export default ResultBook;