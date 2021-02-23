import  React, {Component} from 'react';
import Context from '../Context'
import './Checkin.css';

class Checkin extends Component {
  static contextType = Context;

  render() {
    const error = this.context.error
          ? <div className="error">{this.context.error}</div>
          : "";

    return (
      <>
        {error}
        <h2>Checkin</h2>
        <div className="selectPatronIn">
          <p>Form to select/search patron or all</p>
        </div>
        <br />        
        <div className="resultsCheckin">
          <p>list books currently checked out by patron or all</p>
          <p>&nbsp;&nbsp;&nbsp;button next to each entry to "checkin" returned books</p>
        </div>
      </>
    );
  }  
}

export default Checkin;