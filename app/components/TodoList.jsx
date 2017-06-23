import React from 'react';
import Todo from 'Todo';
import {ListGroup} from 'react-bootstrap';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.renderTodos = this.renderTodos.bind(this);
  }
  renderTodos(){
    var {todos} = this.props;
    return todos.map((todo) => {
      return (
        <Todo key={todo.id} {...todo} onToggle={this.props.handleTodoCompleted}/>
      )
    });
  }
  render() {
    return (
      <ListGroup>
        {this.renderTodos()}
      </ListGroup>
    );
  }
}

module.exports = TodoList;
