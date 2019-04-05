import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoteCard from '../components/NoteCard';

export class NotesContainer extends Component {

  render() {
    const { notes } = this.props;
    console.log('notes container: ', notes)
    const renderNotes = notes.map(note => (
      <NoteCard key={note.id} note={note} title={this.props.title} deleteNote={this.deleteNote} />
    ));
    return (
      <div>
        {renderNotes}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  notes: state.notes,
  error: state.error
})

export default connect(mapStateToProps)(NotesContainer);