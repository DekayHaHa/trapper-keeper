import React, { Component } from 'react';
import { addItem, addTitle } from '../actions';
import { connect } from 'react-redux';

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      item: ''
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  // addIdea = (e) => {
  //   const { value } = e.target;  
  //   const { items } = this.props;
  //   console.log(items)
  //   // this.setState({ items: [...items, value] })  
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTitle(this.state.title);
    this.props.addItem(this.state.item);
    // add to global redux state
    // into items array
  }

  renderItems = () => {
    const { items } = this.props;
    console.log(this.props)
    // return items.ideas.map(item => (
    //   <p>{item}</p>
    // ))
  }

  render() {
    const { title, item } = this.state;
    const { items } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          placeholder='Title...' 
          value={title}
          name='title'
          onChange={this.handleChange}
        />
        {items && 
          this.renderItems()
        }
        <input 
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
