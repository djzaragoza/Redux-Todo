import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from "..actions/index";
import "./Todo.css";

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

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

//const mapStateToProps = state => {
// console.log("Todo.js: mapStateToProps: state ", state);
//  return {
//      todosOnProps: state.todos
//     }
// }

export default connect(
    null,
    { toggleTodo }
)(Todo);