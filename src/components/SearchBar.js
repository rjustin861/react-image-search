import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    return (
      <div>
        <div className='ui segment'>
          <form className='ui form' onSubmit={this.onFormSubmit}>
            <div className='field'>
              <label>Image Search</label>
              <input
                type='text'
                placeholder='Enter search term...'
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
