import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from "../actions/index";

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: "",
    }
  }
  render() {
    return (
      <form onSubmit={(event)=> this.onFormSubmit(event)} className="input-group">
        <input
          placeholder="Search for City forecast"
          className="form-control" 
          onChange={(event) => this.handleInputChange(event.target.value)}
          value={this.state.term}/>
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Search</button>
        </span>
      </form>
    );
  }

  handleInputChange =( term ) => {
    this.setState({
      term
    });
  }
  
  onFormSubmit =(event) => {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ""});
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);