import React from 'react';

const Search = props => {

        return (
            <form  onSubmit={props.searchFunction}>
                <input type='text'
                placeholder='Search'
                defaultValue=''   
                />
               
            </form>
        )
    
}


export default Search;