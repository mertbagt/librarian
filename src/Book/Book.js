import  React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Error from '../Error/Error';
import Context from '../Context';
import AddBook from '../AddBook/AddBook';
import SelectBook from '../SelectBook/SelectBook';
import './Book.css';

class Book extends Component {
  static contextType = Context;

  render() {
    return (
      <>
        <Error />
        <h2>Books</h2>
        <AddBook />
        <br />        
        <div className="searchBook">
          <h3>Search / Delete Books</h3>
        </div>
        <SelectBook path={this.props.location.pathname}/>
      </>
    );
  }  
}

export default withRouter(Book);