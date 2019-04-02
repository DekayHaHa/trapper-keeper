import React, { Component } from 'react';
import { addItem, addTitle } from '../actions';
import { connect } from 'react-redux';

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
    this.setState({
      itemsList: [...itemsList, item],
      item: ''
    })
    // this.setState({ items: [...items, value] })  
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // add card
  }

  renderItems = () => this.state.itemsList.map(item => <p>{item}</p>)

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
        <button>Add Item</button>
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
