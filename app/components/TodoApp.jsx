import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import uuid from 'uuid';

import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import SearchTodo from 'SearchTodo';
import TodoAPI from 'TodoAPI';

class TodoApp extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        showCompleted: false,
        searchText:'',
      todos: TodoAPI.getTodos()
    };
      this.handleAddTodo = this.handleAddTodo.bind(this);
      this.handleTodoCompleted = this.handleTodoCompleted.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
  }
  componentDidUpdate(){
    TodoAPI.setTodos (this.state.todos);
  }
  handleAddTodo (data){
    var allTodos = this.state.todos;
    this.setState({
      todos: [
        ...allTodos,
        {
          id: uuid(),
          text: data,
          completed: false
        }
      ]
    });
  }
  handleTodoCompleted (id){
    var updatedTodos = this.state.todos.map((todo) => {
        if (todo.id === id){
           todo.completed = !todo.completed;
        }
        return todo;
    });
    this.setState({todos: updatedTodos});
  }
  handleSearch(searchText, showCompleted){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }
  render (){
    var {todos, showCompleted, searchText} = this.state;
    var filteredTodo = TodoAPI.sortTodos(todos, showCompleted, searchText);
    return (
      <Grid>
        <Row className="upper-sapace"></Row>
        <Row >
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6} className="show-grid">
            <h1>Todo App with react-bootstrap </h1>
            <p>- Aman Soni</p>
            <SearchTodo handleSearch={this.handleSearch}/>
            <TodoList todos={filteredTodo} handleTodoCompleted={this.handleTodoCompleted}/>
            <AddTodoForm handleAddTodo={this.handleAddTodo}/>
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Grid>
    )
  }
}

module.exports = TodoApp;
