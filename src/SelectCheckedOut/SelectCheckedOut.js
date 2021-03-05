import  React, {Component} from 'react';
import Context from '../Context';
import ResultCheckedOut from '../ResultCheckedOut/ResultCheckedOut';
import ValidationError from '../ValidationError/ValidationError';
import './SelectCheckedOut.css';

class SelectCheckedOut extends Component {
  static contextType = Context;

  render() {
    let results = this.context.booksCheckedOut;
    const patronId = this.context.currentPatron.patronId

    results = results.filter(result => result.patronId === patronId)

    const noChecks = (results.length === 0)
          ? <h5 className="noChecks">
              This patron does not have any books checked out currently 
            </h5>
          : "";

    return (
      <section className="selectCheckedOut">
        <h3>Books currently checked out by this patron:</h3> 
        <table id={"resultsTableChecks"}>
          <tbody>
            {results.map((result, index) => 
              <ResultCheckedOut key={index} subkey={index} path={this.props.path} bookId={result.bookId} checkId={result.checkId}/>
            )}
          </tbody>
        </table>
        {noChecks}
      </section>
    );
  }  
}

export default SelectCheckedOut;