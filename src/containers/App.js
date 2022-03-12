import React from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";
import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSearch: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
}


class App extends React.Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const searchedRobots = this.props.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })

    return (
      <div className="tc">
          <h1 className="f1">RoboFriend</h1>
          <SearchBox searchTerm={this.props.searchField} onSearch={this.props.handleSearch}/>

          {this.props.error && <h1>Something went wrong ...</h1>}

          {this.props.isPending ? (
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