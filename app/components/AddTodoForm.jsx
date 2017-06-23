import React from 'react';

import {Form, FormGroup, FormControl, Button} from 'react-bootstrap';

class AddTodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitTodo = this.submitTodo.bind(this);
  }
  submitTodo (e){
    e.preventDefault();
    var todoText = this.todoText.value;
    if(todoText.length > 0) {
        this.todoText.value = '';
        this.props.handleAddTodo(todoText);
    }else {
      this.todoText.focus();
    }
  }
  render() {
    return (
      <Form onSubmit={this.submitTodo}>
        <FormGroup>
          <FormControl type="text" placeholder="Enter Todo"  inputRef={(ref)=>{this.todoText = ref}} />
          <Button bsStyle="primary" block type="submit">Add</Button>
        </FormGroup>
      </Form>
    );
  }
};

module.exports = AddTodoForm;
