import  React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Patron from '../Patron/Patron';
import Book from '../Book/Book';
import Checkin from '../Checkin/Checkin';
import Checkout from '../Checkout/Checkout';
import Context from '../Context';
import config from '../config';
import './App.css';

class App extends Component {
  state = {
    patrons: [],
    books: [],
    booksCheckedOut: [],
    patronResults: [],
    bookResults: [],
    currentPatron: [],
    error: "",
  }

  componentDidMount() {
    console.log('Fetching info from database')
    this.handleError('Fetching info from database')
    Promise.all([
      fetch(`${config.API_ENDPOINT}/patrons`),
      fetch(`${config.API_ENDPOINT}/books`),
      fetch(`${config.API_ENDPOINT}/checks`),
    ])
        .then(([patronsRes, booksRes, checksRes]) => {
            if (!patronsRes.ok)
              return patronsRes.json().then(e => Promise.reject(e));
            if (!booksRes.ok)
              return booksRes.json().then(e => Promise.reject(e));
            if (!checksRes.ok)
              return checksRes.json().then(e => Promise.reject(e));     
            return Promise.all([patronsRes.json(), booksRes.json(), checksRes.json()]);
        })
        .then(([patrons, books, booksCheckedOut]) => {
          console.log('Fetch successful')
          this.handleError('Data Fetched successfully')
            this.setState({patrons, books, booksCheckedOut});
        })
        .catch(error => {
            this.handleError(error.message);
            console.error({error});
        });
  }

  handleAddPatron = (newPatron) => {
    fetch(`${config.API_ENDPOINT}/patrons`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })  
      .then(patrons => {
        this.setState({patrons});

        let results = this.state.patrons;
        const first = newPatron.first;
        const last = newPatron.last;

        if (first != '') {
          results = results.filter(result => result.first.search(first) > -1)
        }
    
        if (last != '') {
          results = results.filter(result => result.last.search(last) > -1)
        }
    
        this.handleUpdatePatronResults(results)
      })
      .catch(error => {
        this.handleError(error.message);
        console.error({error});
      });
  }

  handleAddBook = (newBook) => {
    fetch(`${config.API_ENDPOINT}/books`)
       .then(res => {
         if(!res.ok) {
           throw new Error('Something went wrong, please try again later');
         }
         return res.json();
       })  
       .then(books => {
         this.setState({books});

         let results = this.state.books;
         const title = newBook.title;
         const genre = newBook.genre;
         const ISBN = newBook.ISBN;

         if (title != '') {
           results = results.filter(result => result.title.search(title) > -1)
         }
        
         if (genre != '') {
           results = results.filter(result => result.genre.search(genre) > -1)
         }
     
         if (ISBN != '') {
           results = results.filter(result => result.ISBN.search(ISBN) > -1)
         }
     
         this.handleUpdateBookResults(results)
       })
       .catch(error => {
         this.handleError(error.message);
         console.error({error});
       });
  }

  handleCheckBookOut = (bookCheckedOut) => {
    fetch(`${config.API_ENDPOINT}/checks`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })  
      .then(booksCheckedOut => {
        this.setState({booksCheckedOut});
      })
      .catch(error => {
        this.handleError(error.message);
        console.error({error});
      });
  }

  handleCheckIn = (bookId) => {
    fetch(`${config.API_ENDPOINT}/checks`)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })  
      .then(booksCheckedOut => {
        this.setState({booksCheckedOut});
      })
      .catch(error => {
        this.handleError(error.message);
        console.error({error});
      });    
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
      patrons: this.state.patrons.filter(patron => patron.patronId !== id)
    })
  }

  handleDeleteBook = (id) => {
    this.setState({
      books: this.state.books.filter(book => book.bookId !== id)
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
