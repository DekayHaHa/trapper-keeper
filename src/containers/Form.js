import React, { Component } from 'react'

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

  handleSubmit = (e) => {
    e.preventDefault();
    // add to global redux state
    // into items array
  }

  renderItems = (item) => {
    // map through to render global item array
    return <p>{item}</p>
  }

  render() {
    const { title, item } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text' 
          placeholder='Title...' 
          value={title}
          name='title'
          onChange={this.handleChange}
        />
        <input 
          type='text' 
          placeholder='Item...' 
          value={item}
          name='item'
          onChange={this.handleChange}
        />
        <button>Add Item</button>
        {/* add condition for global items array, if yes, renderItems */}
        {this.renderItems()}
      </form>
    )
  }
}

export default Form
