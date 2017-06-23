import React from 'react';
import {Form, FormGroup, FormControl, Button, Panel, Checkbox} from 'react-bootstrap';

class SearchTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
  }
  onSearch() {
    var searchText = this.searchText.value;
    var showCompleted = this.showCompleted.checked;

    this.props.handleSearch(searchText, showCompleted);
  }
  render() {
    return (
      <Panel>
            <FormControl type="text" placeholder="Search Todo" inputRef={(ref)=>{this.searchText = ref}} onChange={this.onSearch}/>
            <Checkbox onChange={this.onSearch} inputRef={(ref)=>{this.showCompleted = ref}}>Show Completed</Checkbox>
      </Panel>
    );
  }
}

module.exports = SearchTodo;
