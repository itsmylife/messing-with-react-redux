import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  onCommentChange = e => this.setState({ comment: e.target.value });
  onFormSubmit = e => {
    e.preventDefault();

    // TODO call an action creator and save the comment

    this.setState({ comment: '' });
  };


  render() {
    return (
      <form onSubmit={ this.onFormSubmit }>
        <h4>Add a Comment</h4>
        <textarea value={ this.state.comment } onChange={ this.onCommentChange } />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default CommentBox;
