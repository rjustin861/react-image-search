import React, { useRef, useState, useEffect } from 'react';

const ImageCard = ({ id, urls, description }) => {
  const imgRef = useRef(null);
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    imgRef.current.addEventListener('load', () => {
      const height = imgRef.current.clientHeight;
      const spans = Math.ceil(height / 10);
      setSpans(spans);
    });
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imgRef} src={urls.regular} alt={description} />
    </div>
  );
};

export default ImageCard;
