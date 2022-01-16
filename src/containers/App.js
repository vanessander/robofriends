import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    handleSearch: (event) => dispatch(setSearchField(event.target.value))
  };
}


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      robots: [],
      // searchTerm: '',
    }
  }

  /*handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value })
  };*/

  componentDidMount() {
    console.log(this.props.store);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => this.setState({ robots: json, isLoading: false }));
  }

  render() {
    const searchedRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })

    return (
      <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchTerm={this.props.searchField} onSearch={this.props.handleSearch}/>

          {this.state.isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <Scroll>
              <ErrorBoundry>
                <CardList robots={searchedRobots} />
              </ErrorBoundry>
            </Scroll>
          )}
      </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);