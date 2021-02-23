import  React, {Component} from 'react';
import Context from '../Context'
import ValidationError from '../ValidationError/ValidationError';
import './ResultCheckedOut.css';

class ResultCheckedOut extends Component {
  static contextType = Context;

  handleDelete = e => {
    e.preventDefault();

    const bookId = this.props.bookId;

    this.context.checkIn(bookId);


//    const results = [];
//    const newStatus = "Deleted book: " + this.props.title;

//    this.context.deleteBook(id);
//    this.context.updateBookResults(results);
//    this.context.updateError(newStatus);
  }

  getTitle() {
    const books = this.context.books;
    const found = books.find(book => book.id === this.props.bookId);
    return found.title;
  }

  render() {
    return (
      <>  
        <tr key={this.props.subkey}>
          <td><button className='deleteBook' type='button' onClick={this.handleDelete}>-</button> {this.getTitle()}</td> 
        </tr>
      </>
    );
  }  
}

export default ResultCheckedOut;