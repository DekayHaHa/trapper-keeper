import React from 'react';

export const Note = (props) => {
  const renderNoteItems = () => {
    return props.itemsList.map(item => <li>{item.text}</li>)
  }

  return (
    <div>
      <p>{props.title}</p>
      <ul>
        {renderNoteItems()}
      </ul>
    </div>
  )
}