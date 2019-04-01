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
      </form>
    )
  }
}

export default Form
