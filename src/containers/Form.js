import React, { Component } from 'react';
// import { addItem, addTitle } from '../actions';
import { addNote } from '../thunks/addNote';
import { connect } from 'react-redux';
import { CompletedItem } from '../components/CompletedItem'
import { IncompleteItem } from '../components/IncompleteItem'

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

  addListItem = (e) => {
    e.preventDefault();
    const { item, itemsList } = this.state;
    const newItem = { text: item, isComplete: false, id: Date.now() };
    this.setState({
      itemsList: [...itemsList, newItem],
      item: ''
    });
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

  renderItems = () => {
    return this.state.itemsList.map((item, i) => {
      const checked = <CompletedItem key={i} {...item} toggle={this.toggleComplete} />;
      const unchecked = <IncompleteItem key={i} {...item} toggle={this.toggleComplete} />;
      return item.isComplete ? unchecked : checked;
    });
  };

  render() {
    const { title, item, itemsList } = this.state;
    return (
      <form>
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
        <button onClick={this.addListItem}>+</button><input
          type='text'
          placeholder='Item...'
          value={item}
          name='item'
          onChange={this.handleChange}
        />
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
