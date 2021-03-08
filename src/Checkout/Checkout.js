import  React, {Component} from 'react';
import Context from '../Context';
import Error from '../Error/Error';
import SelectPatron from '../SelectPatron/SelectPatron';
import SelectBook from '../SelectBook/SelectBook';
import './Checkout.css';

class Checkout extends Component {
  static contextType = Context;

  render() {
    const selectBook = (this.context.currentPatron.length === 0)
         ? ""
         : <SelectBook />;

    return (
      <>
        <Error />
        <h2>Checkout</h2>
        <SelectPatron />
        <br />              
        {selectBook}
      </>
    );
  }  
}

export default Checkout;