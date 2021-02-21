import  React, {Component} from 'react';
import Context from '../Context';
import ValidationError from '../ValidationError/ValidationError';
import './AddPatron.css';

class AddPatron extends Component {
  static contextType = Context;

  state = {
    first: {value: '', touched: false},
    last: {value: '', touched: false},
  };

  updateFirst(first) {
    this.setState({first: {value: first, touched: true}});
  }

  updateLast(last) {
    this.setState({last: {value: last, touched: true}});
  }

  validateFirst() {
    const first = this.state.first.value.trim();

    if (first.length === 0) {
      return "A first name is required";
    } else if (first.length < 2) {
      return "First name must be at least 2 characters long";
    }
  }

  validateLast() {
    const last = this.state.last.value.trim();

    if (last.length === 0) {
      return "A last name is required";
    } else if (last.length < 2) {
      return "Last name must be at least 2 characters long";
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const first = this.state.first.value;
    const last = this.state.last.value;

    const x = this.context.patrons.length - 1;
    const y = this.context.patrons[x].id + 1;

    const newPatron = {id: y, first: first, last: last}

    this.setState({
      first: {value: '', touched: false},
      last: {value: '', touched: false},
    });
    this.context.addPatron(newPatron); 
  }

  render() {
    const firstError = this.validateFirst();
    const lastError = this.validateLast();
    const error = this.context.error
          ? <div className="error">{this.context.error}</div>
          : "";

    return (
      <section className="addPatron">
        <form id="addPatronForm" className="addPatronForm" onSubmit={e => this.handleSubmit(e)}>
          <div className='addPatronFormName'>New Patron</div>
          <div className='addItemFormGroup'>
            <div className="addItemFormFlex">
              <label htmlFor="first">First Name: </label>
              <input
                type="text"
                className="addPatron_input"
                name="first"
                id="first"
                onChange={e => this.updateFirst(e.target.value)}
                placeholder="enter a first name"
                value={this.state.first.value}
                required
              /> 
            </div>
            <div className="addItemFormFlex">
              <label htmlFor="last">Last Name: </label>
              <input
                type="text"
                className="addPatron_input"
                name="last"
                id="last"
                onChange={e => this.updateLast(e.target.value)}
                placeholder="enter a last name"
                value={this.state.last.value}
                required
              /> 
            </div>
            <div className="addItemFormFlex">
              <button
                type="submit"
                className="AddPatron_button"
                disabled={this.validateFirst() || this.validateLast()}
              >Save
              </button>  
            </div>
          </div>
          <div className="AddItem_error_group">
            {this.state.first.touched && <ValidationError message={firstError} />}
            {this.state.last.touched && <ValidationError message={lastError} />}
            {error}
          </div>
        </form>
      </section>
    );
  }  
}

export default AddPatron;