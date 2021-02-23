import  React, {Component} from 'react';
import Context from '../Context';
import ResultPatron from '../ResultPatron/ResultPatron';
import ValidationError from '../ValidationError/ValidationError';
import './SelectPatron.css';

class SelectPatron extends Component {
  static contextType = Context;

  state = {
    first: {value: '', touched: false},
    last: {value: '', touched: false},
//    results: [],
  };

  updateFirst(first) {
    this.setState({first: {value: first, touched: true}});
  }

  updateLast(last) {
    this.setState({last: {value: last, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();

    const first = this.state.first.value;
    const last = this.state.last.value;

    let results = this.context.patrons;

    if (first != '') {
      results = results.filter(result => result.first === first)
    }

    if (last != '') {
      results = results.filter(result => result.last === last)
    }

    this.context.updateResults(results)
//    this.setState({results: results})

    let newError = "";

    if (results.length === 0) {
      newError = "No results found"
    }

    this.context.updateError(newError);
  }

  render() {
    const results = this.context.results;
    const currentPatron = (this.context.currentPatron && (this.props.path != "/patron"))
          ? <h3 className="currentPatron">
              Selected Patron: {this.context.currentPatron.first} {this.context.currentPatron.last}
            </h3>
          : "";
    
    return (
      <section className="selectPatron">
        <div className="currentPatron">
          {currentPatron}
        </div>  
        <form id="selectPatronForm" className="selectPatronForm" onSubmit={e => this.handleSubmit(e)}>
          <div className='selectPatronFormName'>Select Patron</div>
          <div className='selectItemFormGroup'>
            <div className="selectItemFormFlex">
              <label htmlFor="first">First Name: </label>
              <input
                type="text"
                className="selectPatron_input"
                name="first"
                id="first"
                onChange={e => this.updateFirst(e.target.value)}
                placeholder="enter a first name"
                value={this.state.first.value}
              /> 
            </div>
            <div className="selectItemFormFlex">
              <label htmlFor="last">Last Name: </label>
              <input
                type="text"
                className="selectPatron_input"
                name="last"
                id="last"
                onChange={e => this.updateLast(e.target.value)}
                placeholder="enter a last name"
                value={this.state.last.value}
              /> 
            </div>
            <div className="selectItemFormFlex">
              <button
                type="submit"
                className="selectPatron_button"                
              >Search
              </button>  
            </div>
          </div>
        </form>
        <table id={"resultsTable"}>
          <tbody>
            {results.map((result, index) => 
              <ResultPatron key={index} subkey={index} path={this.props.path} id={result.id} first={result.first} last={result.last}></ResultPatron>
            )}
          </tbody>
        </table>
      </section>
    );
  }  
}

export default SelectPatron;