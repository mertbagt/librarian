import  React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Context from '../Context'
import AddBook from '../AddBook/AddBook';
import SelectBook from '../SelectBook/SelectBook';
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
        <AddBook />
        <br />        
        <div className="searchBook">
          <p>Search / Delete Books</p>
        </div>
        <SelectBook path={this.props.location.pathname}/>
      </>
    );
  }  
}

export default withRouter(Book);