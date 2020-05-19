import React from 'react';
import './search-box.css';

export default function searchBox({ placeholder, handleChanger }) {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChanger}
      />
    </div>
  );
}
