import React, { Component } from "react";
import { connect } from 'react-redux';
import { addNote } from '../thunks/addNote';
import { CompletedItem } from '../components/CompletedItem';
import { IncompleteItem } from '../components/IncompleteItem';
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

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    // this.appendNewItem();
  }

  appendNewItem = () => {
    const { item } = this.state;
    if (item) {
      console.log('item:', item)
      return (<TextField autoFocus='false' margin="dense" id="item" label="Item" type="text" name='item' onChange={this.handleChange} fullWidth />)
    }
    // Figure out removing auto focus on new input field
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { title, itemsList } = this.state;
  //   const { addNote } = this.props;
  //   const newNote = {id: Date.now(), title, }
  //   addNote({ id: Date.now(), title });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('handle submit entered')
    const { title, item, itemsList } = this.state;
    const { addNote } = this.props;
    console.log('title: ', title, 'item: ', item, 'items List: ', itemsList);
    const newItem = { text: item, isComplete: false, id: Date.now() };
    this.setState({
      itemsList: [...itemsList, newItem],
      item: ''
    });
    const data = { title, itemsList };
    console.log(data.itemsList)
    addNote(data);
  }

  // addNote = (e) => {
  //   e.preventDefault();
  //   console.log('add note entered')
  //   const { item, itemsList } = this.state;
  //   const newItem = { text: item, isComplete: false, id: Date.now() };
  //   this.setState({
  //     itemsList: [...itemsList, newItem],
  //     item: ''
  //   });
  // }


  toggleComplete = (id) => {
    const { itemsList } = this.state;
    const newItems = itemsList.map(item => {
      return id === item.id ? { ...item, isComplete: !item.isComplete } : item
    });
    this.setState({ itemsList: newItems });
  }

  renderItems = () => {
    return this.state.itemsList.map(item => {
      const checked = <CompletedItem {...item} toggle={this.toggleComplete} />;
      const unchecked = <IncompleteItem {...item} toggle={this.toggleComplete} />;
      return item.isComplete ? unchecked : checked;
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
            <div>{this.appendNewItem()}</div>
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