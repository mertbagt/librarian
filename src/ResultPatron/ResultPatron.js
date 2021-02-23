import  React, {Component} from 'react';
import Context from '../Context'
import ValidationError from '../ValidationError/ValidationError';
import './ResultPatron.css';

class ResultPatron extends Component {
  static contextType = Context;

  handleDelete = e => {
    e.preventDefault();

    const id = this.props.id;
    const results = [];
    const newStatus = "Deleted patron: " + this.props.first + " " + this.props.last;

    this.context.deletePatron(id);
    this.context.updatePatronResults(results);
    this.context.updateError(newStatus)
  }

  handleSubmit = e => {
    e.preventDefault();

    const id = this.props.id;
    const currentPatron = this.context.patrons[id];
    const results = [];

    this.context.updateCurrentPatron(currentPatron);
    this.context.updatePatronResults(results);
  }

  checkStatus() {
    if (this.props.path === "/patron") {
      if (this.context.booksCheckedOut.length > 0) {  
        let checkedOut = false; 
        const check = this.context.booksCheckedOut.find(book => book.patronId === this.props.id)
  
        if (check !== undefined) {
          checkedOut = (check.patronId > -1)
            ? true
            : false        
        } 
      
        if (checkedOut === true) {
          return "This patron has books checked out; check in all books first"
        }
      }
    }      
  }

  render() {
    const checkStatus = this.checkStatus();  
    const patronButton = (this.props.path === "/patron")
          ? <button className='deletePatron' type='button' onClick={this.handleDelete} disabled={this.checkStatus()}>-</button> 
          :<button className='submitPatron' type='button' onClick={this.handleSubmit}>+</button>

    return (
      <>
        <tr key={this.props.subkey}>
          <td className={"right"}>
            {patronButton}
          </td>  
          <td className={"left"}>
            User ID: {this.props.id}
          </td>
          <td className={"left"}>
             | 
          </td> 
          <td className={"right"}>
            {this.props.first} {this.props.last}
          </td>
          <td className={"left"}>
            <ValidationError message={checkStatus} />
          </td>  
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>  
        </tr>
      </>
    );
  }  
}

export default ResultPatron;