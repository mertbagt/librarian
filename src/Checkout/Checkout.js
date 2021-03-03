import  React, {Component} from 'react';
import Context from '../Context'
import SelectPatron from '../SelectPatron/SelectPatron'
import SelectBook from '../SelectBook/SelectBook';
import './Checkout.css';

class Checkout extends Component {
  static contextType = Context;

  render() {
    const error = (this.context.error && (this.context.error != ("No patrons found" && "No books found")))
          ? <div className="error">{this.context.error}</div>
          : "";

    const selectBook = (this.context.currentPatron.length === 0)
         ? ""
         : <SelectBook />;


    return (
      <>
        {error}
        <h2>Checkout</h2>
        <SelectPatron />
        <br />              
        {selectBook}
      </>
    );
  }  
}

export default Checkout;