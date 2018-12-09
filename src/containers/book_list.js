import React from 'react';
import { connect } from 'react-redux';

class BookList extends React.Component {
  renderList(){
    return this.props.books.map( item =>
      <li className="list-group-item" key={item.title}>
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

export default connect(mapStateToProps)(BookList);
