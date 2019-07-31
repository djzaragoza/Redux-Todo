import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from "../actions/index";
import "./Todo.css";

class Todo extends React.Component {


    toggleTodo = index => {
        console.log("toggle: ", index);
        this.props.toggleTodo(index)
    }

    toggleHandler = () => {
        this.toggleTodo(this.props.index)
    }

    render() {
        return (
            <div
                className={`task${this.props.todo.completed ? " completed" : ""}`}
                onClick={this.toggleHandler}
            >
                <p>{this.props.todo.value}</p>
            </div>
        )
    }
}


export default connect(
    null,
    { toggleTodo }
)(Todo);