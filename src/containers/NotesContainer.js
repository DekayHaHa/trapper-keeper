import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Note } from '../components/Note';


export class NotesContainer extends Component {
  renderNotes = () => {
    const { notes } = this.props;
    return notes.map(note => <Note {...note}/>)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderNotes()}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  notes: state.notes,
  error: state.error
})

export default connect(mapStateToProps)(NotesContainer);