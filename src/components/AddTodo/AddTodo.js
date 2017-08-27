import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todoActions';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
 
class AddTodo extends Component {

    

    render() {
        //console.log(this.props);
        return (
            <div>
                {/*<input ref="todoInput" type="text"/>*/}

                <TextField
      hintText="Hint Text" ref="todoInput" type="text" floatingLabelText="Todo"
    />
                
                    <RaisedButton label="Add Todo" primary={true}  onClick={()=>{
                    this.props.dispatch(addTodo(this.refs.todoInput.input.value));
                    this.refs.todoInput.input.value = '';}}/>
                
            </div>
        );
    }
}

AddTodo = connect()(AddTodo);

export default AddTodo;