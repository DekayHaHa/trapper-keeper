import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNote } from '../thunks/addNote';
import { ItemTextField } from './ItemTextField';
import { Dialog, DialogTitle, DialogActions, Tooltip, TextField, Button } from '@material-ui/core';
import { changeNote } from '../thunks/changeNote';
import { Redirect } from 'react-router-dom'

export class CreateNote extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            itemsList: [],
            open: false,
            redirect: false
        };
    }

    componentWillMount() {
        const { title, itemsList } = this.props;
        if (title) {
            this.setState({ title, itemsList, open: true })
        }
    }

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
        const { edit, changeNote, addNote, id } = this.props;
        const data = { title, itemsList };
        if (edit) {
            changeNote({ id, title, itemsList });
            this.setState({ itemsList: [], title: '', open: false, redirect: true })
        } else {
            addNote(data);
            this.setState({ itemsList: [], title: '', open: false, redirect: true })
        }
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

    checkRedirect = () => {
        const { redirect, open } = this.state
        if (!open && redirect) {
            return <Redirect to="/api/notes" />
        }
    }

    renderItems = () => {
        return this.state.itemsList.map((item) => {
            return <ItemTextField key={item.id} {...item} toggle={this.toggleComplete} updateItem={this.updateItem} />;
        });
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { open, title } = this.state;

        return (
            <div>
                {this.checkRedirect()}
                <Tooltip title='Create Note' placement='bottom'>
                    <Button color="primary" onClick={this.handleClickOpen}><span className='add-note-btn'>+</span></Button>
                </Tooltip>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title" transitionDuration={800} className='dialog-box'>
                    <DialogTitle>
                        <TextField autoFocus margin="dense" id="title" label="Title" type="text" name='title' value={title} onChange={this.handleChange} fullWidth />
                        {
                            this.renderItems()
                        }
                        <ItemTextField addListItem={this.addListItem} />
                    </DialogTitle>
                    <DialogActions>
                        <form>
                            <Button type='submit' onClick={this.handleSubmit} color="primary">Save Note</Button>
                        </form>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export const mapDispatchToProps = (dispatch) => ({
    addNote: (newNote) => dispatch(addNote(newNote)),
    changeNote: (note) => dispatch(changeNote(note))
});

export default connect(null, mapDispatchToProps)(CreateNote);