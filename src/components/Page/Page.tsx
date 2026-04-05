import { Button } from '../Button';
import './Page.css';

interface PageAction {
  label: string;
  onClick?: () => void;
  disclosure?: boolean;
}

interface PageProps {
  title: string;
  primaryAction?: PageAction;
  secondaryAction?: PageAction;
  children: React.ReactNode;
}

export function Page({ title, primaryAction, secondaryAction, children }: PageProps) {
  return (
    <main className="page">
      <div className="page__content">
        <header className="page__header">
          <h1 className="page__title">{title}</h1>
          {(primaryAction || secondaryAction) && (
            <div className="page__actions">
              {secondaryAction && (
                <Button
                  variant="secondary"
                  disclosure={secondaryAction.disclosure}
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </Button>
              )}
              {primaryAction && (
                <Button variant="primary" onClick={primaryAction.onClick}>
                  {primaryAction.label}
                </Button>
              )}
            </div>
          )}
        </header>
        {children}
      </div>
    </main>
  );
}
