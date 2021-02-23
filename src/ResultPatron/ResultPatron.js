import  React, {Component} from 'react';
import Context from '../Context'
import './ResultPatron.css';

class ResultPatron extends Component {
  static contextType = Context;

  handleDelete = e => {
    e.preventDefault();

    const id = this.props.id;
    const results = [];
    const newStatus = "Deleted patron: " + this.props.first + " " + this.props.last;

    this.context.deletePatron(id);
    this.context.updateResults(results);
    this.context.updateError(newStatus)
  }

  handleSubmit = e => {
    e.preventDefault();

    const id = this.props.id;
    const currentPatron = this.context.patrons[id];
    const results = [];

    this.context.updateCurrentPatron(currentPatron);
    this.context.updateResults(results);
  }

  render() {
    const patronButton = (this.props.path === "/patron")
          ? <button className='deletePatron' type='button' onClick={this.handleDelete}>-</button> 
          :<button className='submitPatron' type='button' onClick={this.handleSubmit}>+</button>

    return (
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
          {this.props.first}
        </td>
        <td className={"left"}>
          {this.props.last}
        </td>  
      </tr>
    );
  }  
}

export default ResultPatron;