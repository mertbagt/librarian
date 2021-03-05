import  React, {Component} from 'react';
import Context from '../Context';
import config from '../config';
import ValidationError from '../ValidationError/ValidationError';
import './ResultBook.css';

class ResultBook extends Component {
  static contextType = Context;

  handleDelete = e => {
    e.preventDefault();

    const id = this.props.id;
    const results = [];
    const newStatus = "Deleted book: " + this.props.title;

    fetch(`${config.API_ENDPOINT}/books/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if (!res.ok)
        return res.then(e => Promise.reject(e))
      return res
    })
    .then(() => {
      this.context.deleteBook(id);
      this.context.updateBookResults(results);
      this.context.updateError(newStatus);
    })
    .catch(error => {
      this.context.updateError(error.message);
      console.error({ error })
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    const patronId = this.context.currentPatron.patronId
    const bookId = this.props.id;
    const newDbCheckedOut = {patron_id: patronId, book_id: bookId} // id is a placeholder needed by vercel to submit without error but not needed by db
    const bookCheckedOut = {patronId, bookId}
    const results = [];
    const newStatus = "Checked out book: " + this.props.title;

    fetch(`${config.API_ENDPOINT}/checks`, {
      method: 'POST',
      body: JSON.stringify(newDbCheckedOut),
      headers: {
        'content-type': 'application/json'
      },
    })
    .then(res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later');
      }
      return res.json();
    })
    .then(data => {
      this.context.checkBook(bookCheckedOut);
      this.context.updateBookResults(results);
      this.context.updateError(newStatus);
    })  
    .catch(error => {
      this.context.updateError(error.message);
      console.error({error});
    })
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

        patrons = this.context.patrons.filter(patron => patron.patronId === check.patronId); 
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
      <ul>  
        <li>{bookButton} {this.props.title} <ValidationError message={checkStatus} /></li> 
        <li>Page Count: {this.props.pageCount}</li> 
        <li>Genre: {this.props.genre}</li>
        <li>ISBN: {this.props.ISBN}</li>
      </ul>
    );
  }  
}

export default ResultBook;