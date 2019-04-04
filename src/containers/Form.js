import React, { Component } from 'react';
import { addNote } from '../thunks/addNote';
import { connect } from 'react-redux';
import { ItemInput } from './ItemInput'

export class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      itemsList: []
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

  render() {
    const { title } = this.state;
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          value={title}
          name='title'
          onChange={this.handleChange}
        />
        {
          this.renderItems()
        }
        <ItemInput addListItem={this.addListItem} />
        {/* <input
          type='text'
          placeholder='Item...'
          value={item}
          name='item'
          onChange={this.handleChange}
        /> */}
        <button onClick={this.handleSubmit}>Save Note</button>
      </form>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  addNote: (item) => dispatch(addNote(item))
});

// export const mapStateToProps = (state) => ({
//   items: state.items
// });

export default connect(null, mapDispatchToProps)(Form);
