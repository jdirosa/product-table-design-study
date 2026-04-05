import { Button } from '../Button';
import { PlaceholderIcon } from './PlaceholderIcon';
import './EmptyState.css';

interface EmptyStateProps {
  onClearSearch: () => void;
}

export function EmptyState({ onClearSearch }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <div className="empty-state__icon">
        <PlaceholderIcon size={32} />
      </div>
      <p className="empty-state__text">Couldn't find any matching products</p>
      <Button variant="secondary" onClick={onClearSearch}>
        Clear search
      </Button>
    </div>
  );
}
