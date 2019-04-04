import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

export class ItemTextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            isComplete: false,
            id: 0
        };
    }

    componentWillMount() {
        const { text, isComplete, id } = this.props
        if (this.props.text) {
            console.log(this.props)
            this.setState({ text, isComplete, id })
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    sendListItem = () => {
        const { addListItem, updateItem } = this.props;
        console.log('send item entered')
        if (addListItem) {
            addListItem(this.state.text)
            this.setState({ text: '' })
        } else {
            updateItem(this.state)
        }
    }

    render() {
        const { text } = this.state;
        return (
            <div>
                <TextField autoFocus margin="dense" id="item" label="Item" type="text" name='text' value={text} onBlur={this.sendListItem} onChange={this.handleChange} fullWidth />
            </div>
        );
    }
}