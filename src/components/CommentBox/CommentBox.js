import { fetchComments, saveComment } from 'actions/comments';
import requireAuth from 'components/requireAuth';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBox extends Component {
  state = {
    comment: '',
  };

  onCommentChange = e => this.setState({ comment: e.target.value });
  onFormSubmit = e => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={ this.onFormSubmit }>
          <h4>Add a Comment</h4>
          <textarea value={ this.state.comment } onChange={ this.onCommentChange } />
          <div>
            <button>
              Submit Comment
            </button>
          </div>
        </form>
        <button className="fetch-comments" onClick={ this.props.fetchComments }>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { saveComment, fetchComments },
)(requireAuth(CommentBox));
