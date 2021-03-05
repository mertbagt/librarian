import  React, {Component} from 'react';
import Context from '../Context';
import './Error.css';

class Error extends Component {
  static contextType = Context;

  render() {
    const error = ((this.context.error.length !== 0) && (this.context.error != "No patrons found") && (this.context.error != "No books found"))
          ? <div className="errorTop">{this.context.error}</div>
          : "";

    return (
      <>
        {error}
      </>
    );
  }  
}

export default Error;