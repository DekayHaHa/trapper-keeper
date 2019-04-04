import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNote } from '../thunks/addNote';
import { ItemInput } from './ItemInput';
import { Dialog, DialogTitle, DialogActions, Tooltip, TextField, Button } from '@material-ui/core';

export class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            item: '',
            itemsList: [],
            open: false
        };
    }


    // appendNewItem = () => {
    //     const { item } = this.state;
    //     if (item) {
    //         console.log('item:', item)
    //         return (<TextField autoFocus='false' margin="dense" id="item" label="Item" type="text" name='item' onChange={this.handleChange} fullWidth />)
    //     }
    //     // Figure out removing auto focus on new input field
    // }

    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    }

    addListItem = (text) => {
        const { itemsList } = this.state;
        if (text) {
            const newItem = { text, isComplete: false, id: Date.now() };
            this.setState({
                itemsList: [...itemsList, newItem],
                item: ''
            });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, itemsList } = this.state;
        const data = { title, itemsList };
        console.log(data);
        this.props.addNote(data);
        this.setState({ itemsList: [], title: '' })
    }

    toggleComplete = (id) => {
        const { itemsList } = this.state;
        const newItems = itemsList.map(item => {
            return id === item.id ? { ...item, isComplete: !item.isComplete } : item
        });
        this.setState({ itemsList: newItems });
    }

    updateItem = (item) => {
        const { itemsList } = this.state;

        const newItems = itemsList.map(val => {
            return item.id === val.id ? { ...item } : val
        });
        this.setState({ itemsList: newItems.filter(val => val.text) });
    }

    renderItems = () => {
        return this.state.itemsList.map((item) => {
            return <ItemInput key={item.id} {...item} toggle={this.toggleComplete} updateItem={this.updateItem} />;
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, title, item } = this.state;

        return (
            <div>
                <Tooltip title='Create Note' placement='bottom'>
                    <Button color="primary" onClick={this.handleClickOpen}><span className='add-note-btn'>+</span></Button>
                </Tooltip>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title" transitionDuration={800}>
                    <DialogTitle>
                        <TextField autoFocus margin="dense" id="title" label="Title" type="text" name='title' onChange={this.handleChange} fullWidth />
                        <TextField autoFocus margin="dense" id="item" label="Item" type="text" name='item' onChange={this.handleChange} fullWidth />
                        {/* <div>{this.appendNewItem()}</div> */}
                    </DialogTitle>
                    <DialogActions>
                        <form>
                            {/* <Button onClick={this.addNote} color="primary">Cancel</Button> */}
                            <Button type='submit' onClick={this.handleSubmit} color="primary">Save Note</Button>
                        </form>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch) => ({
    addNote: (newNote) => dispatch(addNote(newNote))
});

export default connect(null, mapDispatchToProps)(CreateNote);