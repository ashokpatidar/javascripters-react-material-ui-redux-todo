/**
 * The only true button.
 *
 * @version 1.0.1
 * @author [Artem Sapegin](https://github.com/sapegin)
 * @author [Andy Krings-Stern](https://github.com/ankri)
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo/Todo';



class TodoList extends Component {
    render() {
        /* test for the render */
        //console.log(this.props);
        return (
            <div>
                {this.props.todos.map((todo,index) => {
                    return <Todo
                     key={todo.id} {...todo} onClick={() => this.props.onTodoClick(todo.id)}/>;
                })}
            </div>
        );
    }
}

TodoList.propTypes = {
    /**
     * Description for the todos
     */
    todos:PropTypes.array,
    /**
     * Description for the functions
     */
    onTodoClick:PropTypes.func
    
};

TodoList.defaultProps = {
    todos:[]
}

export default TodoList;