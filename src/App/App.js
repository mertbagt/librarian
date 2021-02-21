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
  }
];

class App extends Component {
  state = {
    patrons
  }

  handleAddPatron = (newPatron) => {
    this.setState({
      patrons: [...this.state.patrons, newPatron ],
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
      addPatron: this.handleAddPatron,
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
