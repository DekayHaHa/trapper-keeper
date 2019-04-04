import React from 'react';
import { NoteCard } from '../containers/NoteCard';
import { Grid } from '@material-ui/core';

export const Note = (props) => {
  // const renderNoteItems = props.itemsList.map(note => (
  //   <Grid key={Date.now()} item xs={12} sm={6} md={4} lg={2}>
  //     <NoteCard key={note.id} note={note} />
  //   </Grid>
  // ));

  const renderNoteItems = () => {
    props.itemsList.map(item => console.log('note item: ', item));
    // return props.itemsList.map(item => <li>{item.text}</li>)
  }

  console.log('props in note: ', props.itemsList)

  return (
    // <Grid container justify="flex-start" alignItems="center">
    //   {renderNoteItems}
    // </Grid>
    <div>
      {renderNoteItems}
    </div>
  );
};