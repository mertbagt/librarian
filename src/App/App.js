import  React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Patron from '../Patron/Patron';
import Book from '../Book/Book';
import Checkin from '../Checkin/Checkin';
import Checkout from '../Checkout/Checkout';
import Context from '../Context';
import './App.css';

const patrons = [
  {
    id: 0,
    first: 'Joe',
    last: 'Smith'
  },
  {
    id: 1,
    first: 'Bob',
    last: 'Johnson'
  },
  {
    id: 2,
    first: 'John',
    last: 'Baker'
  },
  {
    id: 3,
    first: 'John',
    last: 'Barber'
  }
];

const books = [
  {
    id: 0,
    title: 'A Game of Thrones',
    pageCount: 694,
    genre: 'political fiction',
    ISBN: '0-553-10354-7'
  }
]

const booksCheckedOut = []

class App extends Component {
  state = {
    patrons,
    books,
    booksCheckedOut,
    patronResults: [],
    bookResults: [],
    currentPatron: [],
    error: "",
  }

  handleAddPatron = (newPatron) => {
    this.setState({
      patrons: [...this.state.patrons, newPatron ],
    })
  }

  handleAddBook = (newBook) => {
    this.setState({
      books: [...this.state.books, newBook ],
    })
  }

  handleCheckBookOut = (bookCheckedOut) => {
    this.setState({
      booksCheckedOut: [...this.state.booksCheckedOut, bookCheckedOut ],
    })
  }

  handleCheckIn = (bookId) => {
    console.log(bookId);
    console.log(typeof(bookId))

    this.setState({
      booksCheckedOut: this.state.booksCheckedOut.filter(book => (book.bookId !== bookId))
    })
  }

  handleError = (newError) => {
    this.setState({
      error: newError
    })
  }

  handleUpdatePatronResults = (results) => {
    this.setState({
      patronResults: results
    })
  }

  handleUpdateBookResults = (results) => {
    this.setState({
      bookResults: results
    })
  }

  handleCurrentPatron = (currentPatron) => {
    this.setState({
      currentPatron: currentPatron
    })
  }

  handleDeletePatron = (id) => {
    this.setState({
      patrons: this.state.patrons.filter(patron => patron.id !== id)
    })
  }

  handleDeleteBook = (id) => {
    this.setState({
      books: this.state.books.filter(book => book.id !== id)
    })
  }    

  renderNavRoutes() {
    return (
        <>
          <Route path="/" component={Nav} />
        </>
    );
  }

  renderMainRoutes() {
    return (
        <>
          <Route exact path="/" component={About} />
          <Route path="/patron" component={Patron} />
          <Route path="/book" component={Book} />
          <Route path="/checkin" component={Checkin} />
          <Route path="/checkout" component={Checkout} />
        </>
    );
  }

  render() {
    const value = {
      patrons: this.state.patrons,
      books: this.state.books,
      booksCheckedOut: this.state.booksCheckedOut,
      patronResults: this.state.patronResults,
      bookResults: this.state.bookResults,
      currentPatron: this.state.currentPatron,
      addPatron: this.handleAddPatron,
      addBook: this.handleAddBook,
      checkBook: this.handleCheckBookOut,
      checkIn: this.handleCheckIn,
      updateError: this.handleError,
      updatePatronResults: this.handleUpdatePatronResults,
      updateBookResults: this.handleUpdateBookResults,
      updateCurrentPatron: this.handleCurrentPatron,
      deletePatron: this.handleDeletePatron,
      deleteBook: this.handleDeleteBook,
      error: this.state.error,      
    };
    return (
      <Context.Provider value={value}>
        <div className="App">
          <nav className="App__nav">{this.renderNavRoutes()}</nav>
          <main className='App'>{this.renderMainRoutes()}</main>
        </div>
      </Context.Provider>
    );
  }  
}

export default App;
