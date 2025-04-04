import { useState, useEffect } from 'react';
import { grayPlaceholder } from '@/utils/placeholderImage';

interface DirectImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

const DirectImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  style = {},
}: DirectImageProps) => {
  const [imgSrc, setImgSrc] = useState<string>(grayPlaceholder);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Set the actual image source after component mount
    if (src) {
      setImgSrc(src);
    }
  }, [src]);

  return (
    <div 
      style={{ 
        position: 'relative',
        width: width || '100%',
        height: height || 'auto',
        overflow: 'hidden',
        ...style
      }}
      className={className}
    >
      {!loaded && !error && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px',
          }}
        >
          {alt || 'Loading...'}
        </div>
      )}
      <img
        src={error ? grayPlaceholder : imgSrc}
        alt={alt || ''}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        onLoad={() => setLoaded(true)}
        onError={() => {
          console.error(`Failed to load image: ${imgSrc}`);
          setError(true);
          setImgSrc(grayPlaceholder);
        }}
      />
    </div>
  );
};

export default DirectImage;
