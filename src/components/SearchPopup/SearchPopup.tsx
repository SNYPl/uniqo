import React from 'react';

const SearchPopup = () => {
  return (
    <div className="search-popup">
        <button className="close-search"></button>
        <form method="post" action="blog.html">
            <div className="form-group">
                <input type="search" name="search" placeholder="Search Here" required />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </form>
    </div>
  );
};

export default SearchPopup; 