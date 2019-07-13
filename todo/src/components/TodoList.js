import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';


class TodoList extends React.Component {
    render() {
        return (
            this.props.todosOnProps.map((todo, index) => (
                <Todo todo={todo} key={index} index={index} />
            ))
        )
    }
};

const mapStateToProps = state => {
    console.log("TodoList.js: mapStateToProps: state ", state);
    return {
        todosOnProps: state.todos
    }
}

export default connect(
    mapStateToProps,
    {}
)(TodoList);