import React from 'react';
import { connect } from 'react-redux';
import { submitTodo } from '../actions/index';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        }
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmitTodo = e => {
        e.preventDefault();
        this.props.submitTodo(this.state.newTodo);
        this.setState({ newTodo: "" });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmitTodo}>
                <input type="text" name="newTodo" value={this.state.newTodo} onChange={this.handleChanges} placeholder="Add Todo..." />
                <button type="submit">ADD TODO</button>
            </form>
        )
    }
}

export default connect(
    null,
    { submitTodo }
)(TodoForm);