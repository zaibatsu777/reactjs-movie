import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className={'search'}>
            <div>
                <img src={'search.svg'} />
                <input
                    type={'text'}
                    placeholder={'Search through thousand of movies'}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Search;
