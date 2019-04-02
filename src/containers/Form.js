import React, { Component } from 'react';
import { addItem, addTitle } from '../actions';
import { connect } from 'react-redux';
import { CompletedItem } from '../components/CompletedItem'
import { UncompletedItem } from '../components/UncompletedItem'

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      item: '',
      itemsList: []
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  addIdea = () => {
    const { item, itemsList } = this.state
    const newItem = { text: item, isComplete: false, id: Date.now() }
    this.setState({
      itemsList: [...itemsList, newItem],
      item: ''
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // add card to store with title and array of list item objects. see line 24
  }

  toggleComplete = (id) => {
    const { itemsList } = this.state
    const newItems = itemsList.map(item => {
      return id === item.id ? { ...item, isComplete: !item.isComplete } : item
    })
    this.setState({ itemsList: newItems })
  }

  renderItems = () => {
    return this.state.itemsList.map(item => {
      const checked = <CompletedItem {...item} toggle={this.toggleComplete} />;
      const unchecked = <UncompletedItem {...item} toggle={this.toggleComplete} />;
      return item.isComplete ? unchecked : checked;
    });
  };

  render() {
    const { title, item, itemsList } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          placeholder='Title...'
          value={title}
          name='title'
          onChange={this.handleChange}
        />
        {itemsList.length > 0 &&
          this.renderItems()
        }
        <button onClick={this.addIdea}>+</button><input
          type='text'
          placeholder='Item...'
          value={item}
          name='item'
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Item</button>
        {/* add condition for global items array, if yes, renderItems */}
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addItem: (items) => dispatch(addItem(items)),
  addTitle: (title) => dispatch(addTitle(title))
});

export const mapStateToProps = (state) => ({
  items: state.items
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
