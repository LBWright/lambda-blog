import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: props.posts,
            search: ''
        }
    }

    searchFunction = event => {
        const results = this.state.posts.filter(item => {
          if (item.includes(event.target.value)) {
            return item;
          }
        });
        this.setState({search: results});
      }

    render() {
        return (
            <div>
                <input type='text'
                placeholder='Search'
                onSubmit={this.searchFunction}
                />
               
            </div>
        )
    }
}

export default Search;