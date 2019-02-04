import { changeAuth } from 'actions/auth';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

class App extends Component {

  onClickAuth = () => {
    this.props.changeAuth(!this.props.auth);
  };

  renderButton() {
    return (
      <button
        onClick={ this.onClickAuth }>
        { this.props.auth ? 'Sign Out' : 'Sign In' }
      </button>);
  }

  renderHeader() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/post">Post a Comment</Link></li>
        <li>{ this.renderButton() }</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        { this.renderHeader() }
        <Route exact path='/' component={ CommentList } />
        <Route path='/post' component={ CommentBox } />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(mapStateToProps, { changeAuth })(App);
