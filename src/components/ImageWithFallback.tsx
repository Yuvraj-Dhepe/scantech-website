import { useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { grayPlaceholder } from '@/utils/placeholderImage';

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string;
  fallbackColor?: string;
};

const ImageWithFallback = ({
  src,
  fallbackSrc = grayPlaceholder,
  fallbackColor = '#f0f0f0',
  alt,
  width,
  height,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Use a useEffect to set the image source after component mount
  // This helps with SSR and prevents hydration issues
  useEffect(() => {
    setImgSrc(src as string);
  }, [src]);

  // If no image source is available yet (during SSR), show a colored placeholder
  if (!imgSrc) {
    return (
      <div
        style={{
          backgroundColor: fallbackColor,
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '14px',
          borderRadius: '4px',
        }}
      >
        {alt || 'Loading...'}
      </div>
    );
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!loaded && !error && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: fallbackColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '14px',
            borderRadius: '4px',
          }}
        >
          Loading...
        </div>
      )}
      <Image
        {...rest}
        src={error ? fallbackSrc : imgSrc}
        alt={alt || ''}
        onError={() => {
          console.error(`Failed to load image: ${imgSrc}`);
          setImgSrc(fallbackSrc);
          setError(true);
        }}
        onLoad={() => setLoaded(true)}
        style={{
          ...rest.style,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      />
    </div>
  );
};

export default ImageWithFallback;
