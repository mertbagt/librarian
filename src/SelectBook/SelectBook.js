import  React, {Component} from 'react';
import Context from '../Context';
import ResultBook from '../ResultBook/ResultBook';
import ValidationError from '../ValidationError/ValidationError';
import './SelectBook.css';

class SelectBook extends Component {
  static contextType = Context;

  state = {
    title: {value: '', touched: false},
    minPageCount: 0,
    maxPageCount: 0,
    genre: {value: '', touched: false},
    ISBN: {value: '', touched: false},
  };

  updateTitle(title) {
    this.setState({title: {value: title, touched: true}});
  }

  updateMinCount(minCount) {
    const count = parseInt(minCount, 10);
    this.setState({minPageCount: count});
  }

  updateMaxCount(maxCount) {
    const count = parseInt(maxCount, 10);
    this.setState({maxPageCount: count});
  }

  updateGenre(genre) {
    this.setState({genre: {value: genre, touched: true}});
  }

  updateISBN(ISBN) {
    this.setState({ISBN: {value: ISBN, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();

    const title = this.state.title.value;
    const minPageCount = this.state.minPageCount;
    const maxPageCount = this.state.maxPageCount;
    const genre = this.state.genre.value;
    const ISBN = this.state.ISBN.value;

    let results = this.context.books;

    if (title != '') {
      results = results.filter(result => result.title.search(title) > -1)
    }

    if (minPageCount > 0) {
      results = results.filter(result => (result.pageCount + 1) > minPageCount)
    }

    if (maxPageCount > 0) {
        results = results.filter(result => result.pageCount <= maxPageCount)
      }

    if (genre != '') {
      results = results.filter(result => result.genre.search(genre) > -1)
    }

    if (ISBN != '') {
      results = results.filter(result => result.ISBN.search(ISBN) > -1)
    }

    this.context.updateBookResults(results)
//    this.setState({results: results})

    let newError = "";

    if (results.length === 0) {
      newError = "No results found"
    }

    this.context.updateError(newError);
  }

  render() {
    const results = this.context.bookResults;

    return (
      <section className="selectBook">  
        <form id="selectBookForm" className="selectBookForm" onSubmit={e => this.handleSubmit(e)}>
          <div className='selectBookFormName'>Select Book</div>
          <div className='selectItemFormGroup'>
            <div className="selectItemFormFlex">
              <label htmlFor="title">Book Title: </label>
              <input
                type="text"
                className="selectBook_input"
                name="title"
                id="title"
                onChange={e => this.updateTitle(e.target.value)}
                placeholder="enter a book title"
                value={this.state.title.value}
              /> 
            </div>
            <div className="selectItemFormFlex">
              <label htmlFor="minCount">Minimum Page Count: </label>
              <input
                type="number"
                className="selectBook_input"
                name="minCount"
                id="minCount"
                min="1"
                max="50000"
                onChange={e => this.updateMinCount(e.target.value)}
                value={this.state.minPageCount.value}
              /> 
            </div>
            <div className="selectItemFormFlex">
              <label htmlFor="maxCount">Maximum Page Count: </label>
              <input
                type="number"
                className="selectBook_input"
                name="minCount"
                id="minCount"
                min="1"
                max="50000"
                onChange={e => this.updateMaxCount(e.target.value)}
                value={this.state.maxPageCount.value}
              /> 
            </div>
            <div className="selectItemFormFlex">
              <label htmlFor="genre">Genre: </label>
              <input
                type="text"
                className="selectBook_input"
                name="genre"
                id="genre"
                onChange={e => this.updateGenre(e.target.value)}
                placeholder="enter a genre"
                value={this.state.genre.value}
              /> 
            </div>
            <div className="selectItemFormFlex">
              <label htmlFor="ISBN">ISBN: </label>
              <input
                type="text"
                className="selectBook_input"
                name="ISBN"
                id="ISBN"
                onChange={e => this.updateISBN(e.target.value)}
                placeholder="1-234-56789-0"
                value={this.state.ISBN.value}
              /> 
            </div>
            <div className="selectItemFormFlex">
              <button
                type="submit"
                className="selectBook_button"                
              >Search</button>  
            </div>
          </div>
        </form>
        <table id={"resultsTable"}>
          <tbody>
            {results.map((result, index) => 
              <ResultBook key={index} subkey={index} path={this.props.path} id={result.bookId} title={result.title} pageCount={result.pageCount} genre={result.genre} ISBN={result.ISBN} />
            )}
          </tbody>
        </table>
      </section>
    );
  }  
}

export default SelectBook;