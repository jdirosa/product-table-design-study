import { PlaceholderIcon } from './PlaceholderIcon';
import './Thumbnail.css';

interface ThumbnailProps {
  src?: string;
  alt?: string;
}

export function Thumbnail({ src, alt = '' }: ThumbnailProps) {
  return (
    <div className="thumbnail">
      <div className="thumbnail__outer" />
      <div className="thumbnail__inner">
        {src ? (
          <img src={src} alt={alt} width="32" height="32" />
        ) : (
          <div className="thumbnail__placeholder">
            <PlaceholderIcon />
          </div>
        )}
      </div>
    </div>
  );
}
