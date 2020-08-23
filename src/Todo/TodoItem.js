import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.completed} onChange={() => this.props.handleChange(this.props.item.id)}/>
                <p style={this.props.item.completed ? completedStyle : null}>{this.props.item.text}</p>
                <button onClick={() => this.props.removeItem(this.props.item.id)}>X</button>
            </div>
        )
    }
}

export default TodoItem