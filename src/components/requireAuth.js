//boilerplate for a hoc (higher order component)

import React, { Component } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
    //our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }

    //our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    //helper method
    shouldNavigateAway() {
      if (!this.props.auth) {
        //console.log('I NEED TO LEAVE!!!');
        this.props.history.push('/');
      }
    }
    //this.props.history object allows us to programmatically navigate around our app by using a method on it called .push() and passing it the route we want to go to inside our app

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth };
  }

  return connect(mapStateToProps)(ComposedComponent);
};

export default requireAuth;
