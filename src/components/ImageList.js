import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({ images }) => {
  const renderedImages = images.map(({ id, urls, description }) => {
    return <ImageCard key={id} urls={urls} description={description} />;
  });

  return (
    <div className='ui items'>
      <div className='item'>
        <div className='content'>
          <div className='header' style={{ marginBottom: '10px' }}>
            Images
          </div>
          <div className='image-list'>{renderedImages}</div>
        </div>
      </div>
    </div>
  );
};

export default ImageList;
