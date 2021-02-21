import  React, {Component} from 'react';
import Context from '../Context';
import ValidationError from '../ValidationError/ValidationError';
import './AddBook.css';

class AddBook extends Component {
  static contextType = Context;

  state = {
    title: {value: '', touched: false},
    pageCount: 0,
    genre: {value: '', touched: false},
    ISBN: {value: '', touched: false},
  };

  updateTitle(title) {
    this.setState({title: {value: title, touched: true}});
  }

  updateCount(count) {
    count = parseInt(count, 10);
    this.setState({pageCount: count});
  }

  updateGenre(genre) {
    this.setState({genre: {value: genre, touched: true}});
  }

  updateISBN(ISBN) {
    this.setState({ISBN: {value: ISBN, touched: true}});
  }

  validateTitle() {
    const title = this.state.title.value.trim();

    if (title.length === 0) {
      return "A book title is required";
    } else if (title.length < 3) {
      return "Book title must be at least 3 characters long";
    }
  }

  validateGenre() {
    const genre = this.state.genre.value.trim();

    if (genre.length === 0) {
      return "A genre is required";
    } else if (genre.length < 3) {
      return "Genre must be at least 3 characters long";
    }
  }

  validateISBN() {
    const ISBN = this.state.ISBN.value.trim();

    if (ISBN.length === 0) {
      return "An ISBN is required";
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.state.title.value;
    const pageCount = this.state.pageCount;
    const genre = this.state.genre.value;
    const ISBN = this.state.ISBN.value;

    const x = this.context.books.length - 1;
    const y = this.context.books[x].id + 1;

    const newBook = {id: y, title: title, pageCount: pageCount,  genre: genre, ISBN: ISBN}

    this.setState({
      title: {value: '', touched: false},
      pageCount: 0,
      genre: {value: '', touched: false},
      ISBN: {value: '', touched: false},        
    })
    this.context.addBook(newBook);
  }

  render() {
    const titleError = this.validateTitle();
    const genreError = this.validateGenre();
    const ISBNError = this.validateISBN();
    const error = this.context.error
          ? <div className="error">{this.context.error}</div>
          : "";

    return (
      <section className="addBook">
        <form id="addBookForm" className="addBookForm" onSubmit={e => this.handleSubmit(e)}>
          <div className='addBookFormName'>New Book</div>
          <div className='addItemFormGroup'>
            <div className="addItemFormFlex">
              <label htmlFor="title">Book Title: </label>
              <input
                type="text"
                className="addBook_input"
                name="title"
                id="title"
                onChange={e => this.updateTitle(e.target.value)}
                placeholder="enter a book title"
                value={this.state.title.value}
                required
              /> 
            </div>
            <div className="addItemFormFlex">
              <label htmlFor="count">Page Count: </label>
              <input
                type="number"
                className="addBook_input"
                name="count"
                id="count"
                min="1"
                max="50000"
                onChange={e => this.updateCount(e.target.value)}
                value={this.state.pageCount.value}
                required
              /> 
            </div>
            <div className="addItemFormFlex">
              <label htmlFor="genre">Genre: </label>
              <input
                type="text"
                className="addBook_input"
                name="genre"
                id="genre"
                onChange={e => this.updateGenre(e.target.value)}
                placeholder="enter a genre"
                value={this.state.genre.value}
                required
              /> 
            </div>
            <div className="addItemFormFlex">
              <label htmlFor="ISBN">ISBN: </label>
              <input
                type="text"
                className="addBook_input"
                name="ISBN"
                id="ISBN"
                onChange={e => this.updateISBN(e.target.value)}
                placeholder="123456789-0"
                value={this.state.ISBN.value}
                required
              /> 
            </div>
            <div className="addItemFormFlex">
              <button
                type="submit"
                className="AddBook_button"
                disabled={this.validateTitle() || this.validateGenre() || this.validateISBN()}
              >Save
              </button>  
            </div>
          </div>
          <div className="AddItem_error_group">
            {this.state.title.touched && <ValidationError message={titleError} />}
            {this.state.genre.touched && <ValidationError message={genreError} />}
            {this.state.ISBN.touched && <ValidationError message={ISBNError} />}
            {error}
          </div>
        </form>
      </section>
    );
  }  
}

export default AddBook;