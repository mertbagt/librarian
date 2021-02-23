import  React, {Component} from 'react';
import Context from '../Context';
import ResultCheckedOut from '../ResultCheckedOut/ResultCheckedOut';
import ValidationError from '../ValidationError/ValidationError';
import './SelectCheckedOut.css';

class SelectCheckedOut extends Component {
  static contextType = Context;

  render() {
    let results = this.context.booksCheckedOut;
    const patronId = this.context.currentPatron.id

    results = results.filter(result => result.patronId === patronId)

    return (
      <section className="selectCheckedOut">  
        <table id={"resultsTable"}>
          <tbody>
            {results.map((result, index) => 
              <ResultCheckedOut key={index} subkey={index} path={this.props.path} bookId={result.bookId} />
            )}
          </tbody>
        </table>
      </section>
    );
  }  
}

export default SelectCheckedOut;