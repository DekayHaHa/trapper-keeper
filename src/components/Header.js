import React from 'react';
import FormDialog from '../containers/CreateNote';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header-container'>
      <h1>Task Mancer</h1>
      <Link to='/api/new-note' className='new-note-btn'>
        <FormDialog />
      </Link>
    </header>
  );
};
