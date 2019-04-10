import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            this.setState({ title, itemsList, open: true });
        }
    }

    handleChange = e => {
        const { value, name } = e.target;
        this.setState({ [name]: value });
    };

    addListItem = text => {
        const { itemsList } = this.state;
        if (text) {
            const newItem = { text, isComplete: false, id: Date.now() };
            this.setState({
                itemsList: [...itemsList, newItem],
                item: ''
            });
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, itemsList } = this.state;
        const { edit, changeNote, addNote, id } = this.props;
        const data = { title, itemsList };
        edit ? changeNote({ id, title, itemsList }) : addNote(data);
        this.setState({ itemsList: [], title: '', open: false, redirect: true }, () => {
            this.setState({ redirect: false })
        })
    };

    handleIsComplete = id => {
        const { itemsList } = this.state;
        const changedItemList = itemsList.map(item => {
            if (item.id === parseInt(id)) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });
        this.setState({ itemsList: changedItemList });
    }

    updateItem = item => {
        const { itemsList } = this.state;
        const newItems = itemsList.map(val => {
            return item.id === val.id ? { ...item } : val;
        });
        this.setState({ itemsList: newItems.filter(val => val.text) });
    };

    checkRedirect = () => {
        const { redirect, open } = this.state;
        if (!open && redirect) {
            this.setState({ open: false, redirect: false })
            return <Redirect to='/' />;
        }
    }

    removeItem = (id) => {
        const { itemsList } = this.state;
        const newList = itemsList.filter(item => item.id !== parseInt(id));
        this.setState({ itemsList: newList });
    }

    addNewInput = (e) => {
        // if (0 === parseInt(this.getInputId(e))) {
        //     console.log('entered add new input');
        //     this.addNewTextField();
        // }
    }

    addNewTextField = () => {
        // return (<ItemTextField autofocus addListItem={this.addListItem} handleIsComplete={this.handleIsComplete} removeItem={this.removeItem} key={Date.now()} addNewInput={this.addNewInput} />)
    }

    getInputId = e => {
        // const { id } = e.target.closest('label');
        // console.log(id)
        // return id;
    }
    renderItems = (bool) => {
        const { itemsList } = this.state;
        const itemsToRender = itemsList.filter(item => item.isComplete === bool)
        console.log(itemsToRender)
        return [...itemsToRender.map(item => {
            return (
                <ItemTextField key={item.id} {...item} handleIsComplete={this.handleIsComplete} updateItem={this.updateItem} removeItem={this.removeItem} addNewInput={this.addNewInput} />
            )
        })]
    }

    // renderItems = () => {
    //     const { itemsList } = this.state;
    //     const completeItems = itemsList.filter(item => item.isComplete === true);
    //     const incompleteItems = itemsList.filter(item => item.isComplete === false);
    //     return [...incompleteItems.map(item => {
    //         return (
    //             <ItemTextField key={item.id} {...item} handleIsComplete={this.handleIsComplete} updateItem={this.updateItem} removeItem={this.removeItem} completeItems={completeItems} inCompleteItems={incompleteItems} addNewInput={this.addNewInput} />
    //         )
    //     }),
    //     <ItemTextField autoFocus addListItem={this.addListItem} handleIsComplete={this.handleIsComplete} removeItem={this.removeItem} key={Date.now()} addNewInput={this.addNewInput} />,
    //     ...completeItems.map(item => {
    //         return <ItemTextField key={item.id} {...item} handleIsComplete={this.handleIsComplete} updateItem={this.updateItem} removeItem={this.removeItem} completeItems={completeItems} inCompleteItems={incompleteItems} addNewInput={this.addNewInput} />
    //     })]
    // };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false, redirect: true });
    };

    render() {
        const { open, title } = this.state;

        return (
            <div>
                {this.checkRedirect()}
                <Tooltip title='Create Note' placement='bottom'>
                    <Button color='primary' onClick={this.handleClickOpen}><span className='add-note-btn'>+</span></Button>
                </Tooltip>
                <Dialog open={open} onClose={this.handleClose} aria-labelledby='form-dialog-title' transitionDuration={800} className='dialog-box'>
                    <DialogTitle>
                        <TextField margin='dense' id='title' label='Title' type='text' name='title' value={title} onChange={this.handleChange} fullWidth />
                        {this.renderItems(false)}
                        <ItemTextField autoFocus={true} addListItem={this.addListItem} handleIsComplete={this.handleIsComplete} removeItem={this.removeItem} key={Date.now()} addNewInput={this.addNewInput} />
                        {this.renderItems(true)}
                    </DialogTitle>
                    <DialogActions>
                        <form className='form-btns'>
                            <Button color='primary'>+</Button>
                            <Button type='submit' onClick={this.handleSubmit} color='primary'>Save Note</Button>
                        </form>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

CreateNote.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    itemsList: PropTypes.array,
    edit: PropTypes.bool,
    addNote: PropTypes.func,
    changeNote: PropTypes.func
};

export const mapDispatchToProps = (dispatch) => ({
    addNote: (newNote) => dispatch(addNote(newNote)),
    changeNote: (note) => dispatch(changeNote(note))
});

export default connect(null, mapDispatchToProps)(CreateNote);