import './Button.css';

type ButtonVariant = 'primary' | 'secondary' | 'plain';

interface ButtonProps {
  variant?: ButtonVariant;
  disclosure?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ variant = 'secondary', disclosure = false, children, onClick }: ButtonProps) {
  return (
    <button className={`button button--${variant}`} onClick={onClick} type="button">
      <span className="button__label">{children}</span>
      {disclosure && (
        <svg className="button__disclosure" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M5 6.5L8 9.5L11 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
