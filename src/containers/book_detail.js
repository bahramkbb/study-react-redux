import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to render!</div>;
    }

    return (
      <div>Book Title: {this.props.book.title}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
