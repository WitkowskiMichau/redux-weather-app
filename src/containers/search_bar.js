import React, {Component} from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ''}
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value})
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="Get forecast"
          className="form-control"
          onChange={this.onInputChange}
          value={this.state.term}/>
        <span className="input-group-btn">
          <button onClick={s} type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    )
  }
}