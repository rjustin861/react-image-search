import React, { useState } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../apis/unsplash';

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    console.log(term);
    try {
      const { data } = await unsplash.get('/search/photos', {
        params: { query: term },
      });
      console.log(data.results);
      setImages(data.results);
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <div className='ui container' style={{ marginTop: '10px' }}>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
