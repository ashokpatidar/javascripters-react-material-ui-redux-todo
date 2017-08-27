import React, { Component } from 'react';

/**
 * Todo component class used to create todo
 */

class Todo extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p onClick={this.props.onClick} style={{textDecoration:this.props.completed?'line-through':''}}>{this.props.text}</p>
            </div>
        );
    }
}

export default Todo;