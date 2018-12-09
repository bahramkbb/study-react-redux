import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends React.Component {
  renderList(){
    return this.props.books.map( item =>
      <li className="list-group-item" key={item.title} onClick={() => this.props.selectBook(item)}>
        {item.title}
      </li>
    );
  }

  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    selectBook: selectBook
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
