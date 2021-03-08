import  React, {Component} from 'react';
import Context from '../Context';
import config from '../config';
import './ResultCheckedOut.css';

class ResultCheckedOut extends Component {
  static contextType = Context;

  handleDelete = e => {
    e.preventDefault();

    const checkId = this.props.checkId;
    const bookId = this.props.bookId;
    const title = this.getTitle();
    const newStatus = "Checked in: " + title;

    fetch(`${config.API_ENDPOINT}/checks/${checkId}`, {
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
      this.context.checkIn(bookId);
      this.context.updateError(newStatus);
    })
    .catch(error => {
      this.context.updateError(error.message);
      console.error({ error })
    })
  }

  getTitle() {
    const books = this.context.books;
    const found = books.find(book => book.bookId === this.props.bookId);
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