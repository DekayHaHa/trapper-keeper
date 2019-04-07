import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            this.setState({ text, isComplete, id })
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    sendListItem = () => {
        const { addListItem, updateItem } = this.props;
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
ItemTextField.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    isComplete: PropTypes.bool,
    addListItem: PropTypes.func,
    updateItem: PropTypes.func
};