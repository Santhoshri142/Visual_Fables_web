import React, { useState } from 'react';
import { FablesCard } from '../dummydata';

const SearchResults = () => {
 const [searchQuery, setSearchQuery] = useState('');

 const handleSearch = (e) => {
    setSearchQuery(e.target.value);
 };

 const filteredCards = FablesCard.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
 );

 return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredCards.map((card) => (
          <li key={card.id}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default SearchResults;