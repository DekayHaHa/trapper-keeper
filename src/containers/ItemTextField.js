import React, { Component } from 'react';
import { TextField, Tooltip, Checkbox, Button } from '@material-ui/core';
import PropTypes from 'prop-types';

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
        if (text) {
            this.setState({ text, isComplete, id });
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    sendListItem = () => {
        const { addListItem, updateItem } = this.props;
        if (addListItem) {
            addListItem(this.state.text);
            this.setState({ text: '' });
        } else {
            updateItem(this.state);
        }
    }

    toggleComplete = e => {
        const { handleIsComplete } = this.props;
        const { id } = e.target.closest('label');
        handleIsComplete(id);
    }

    deleteItem = e => {
        const { removeItem } = this.props;
        const { id } = e.target.closest('label');
        console.log(id)
        removeItem(id);
        console.log('delete item clicked');
    }

    catchKey = e => {
        if(e.keyCode === 13) this.sendListItem();
    }

    render() {
        const { text, id } = this.state;
        return (
            <div className='item-field-container'>
                <label id={id} className='label-container'>
                    <Tooltip title='Complete Item' enterDelay={700}>
                        <Checkbox onClick={(e) => { this.toggleComplete(e) }} />
                    </Tooltip>
                    <TextField margin="dense" id="item" label="Item" type="text" name='text' value={text} onBlur={this.sendListItem} onChange={this.handleChange} onKeyDown={this.catchKey} fullWidth />
                    {
                        text &&
                        <Button onClick={this.deleteItem}>X</Button>
                    }
                </label>
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