import React from 'react';
import {Checkbox, Panel, ListGroupItem} from 'react-bootstrap';

class Todo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var {id, text, completed} = this.props;
    return (
      <ListGroupItem header={text}>
        <Checkbox checked={this.props.completed} onChange={() => {this.props.onToggle(id)}}>Mark completed</Checkbox>
      </ListGroupItem>
    );
  }
}

module.exports = Todo;
