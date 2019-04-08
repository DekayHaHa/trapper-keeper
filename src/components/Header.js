import React from 'react';
import CreateNote from '../containers/CreateNote';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header-container">
      <Link to="/" className='link-style'>
        <h1>Task Mancer</h1>
      </Link>
      {/* <h1>Task Mancer</h1> */}
      <Link to="/api/new-note" className="new-note-btn">
        <CreateNote />
      </Link>
    </header>
  );
};
