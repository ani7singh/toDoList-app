import React, { Component } from 'react';
import './todoItem.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';

 class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todoWrapper">
        <button className="removeTodo" onClick={(e)=> this.removeTodo(this.props.id) }>remove</button>{this.props.todo.text}
      </div>
    );
  }
}
export default TodoItem;