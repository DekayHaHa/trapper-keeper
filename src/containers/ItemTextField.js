import React, { Component } from 'react';
import { TextField, Tooltip, Checkbox } from '@material-ui/core';
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
        if (text) {       
            this.setState({ text, isComplete, id });
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    sendListItem = () => {
        console.log('in send list')
        const { addListItem, updateItem } = this.props;
        if (addListItem) {
            addListItem(this.state.text);
            this.setState({ text: '' });
        } else {
            updateItem(this.state);
        }
    }

    toggleComplete = (e) => {
        const { handleIsComplete } = this.props;
        const { id } = e.target.closest('label');
        handleIsComplete(id);
    }

    catchKey = (e) => {
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
                    <TextField margin="dense" id="item" label="Item" type="text" name='text' value={text} onBlur={this.sendListItem}onChange={this.handleChange} onKeyDown={this.catchKey} fullWidth />
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