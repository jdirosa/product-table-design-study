import type { SelectionAction } from './types';
import './SelectionBar.css';

interface SelectionBarProps {
  visible: boolean;
  count: number;
  actions: SelectionAction[];
}

export function SelectionBar({ visible, count, actions }: SelectionBarProps) {
  return (
    <>
      <div className="sr-only" role="status" aria-live="polite">
        {visible ? `${count} selected` : ''}
      </div>
      <div
        className={`selection-overlay${visible ? ' selection-overlay--visible' : ''}`}
        role="toolbar"
        aria-label="Selection actions"
        aria-hidden={!visible}
      >
        <div className="selection-bar">
          <span className="selection-bar__count">{count} selected</span>
          <div className="selection-bar__divider" aria-hidden="true" />
          {actions.map((action) => (
            <button
              key={action.label}
              type="button"
              className="selection-bar__action"
              tabIndex={visible ? 0 : -1}
              onClick={action.onClick}
            >
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
