import { useId, useRef, useEffect } from 'react';
import './Checkbox.css';

interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (checked: boolean) => void;
  ariaLabel?: string;
}

export function Checkbox({ checked, indeterminate = false, onChange, ariaLabel }: CheckboxProps) {
  const id = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const filterId = `checkbox-shadow-${id}`;
  const gradientId = `checkbox-gradient-${id}`;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const showChecked = checked || indeterminate;

  return (
    <label className="checkbox">
      <input
        ref={inputRef}
        type="checkbox"
        className="checkbox__input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        aria-checked={indeterminate ? 'mixed' : checked}
        aria-label={ariaLabel}
      />
      <span className={`checkbox__control${showChecked ? ' checkbox__control--active' : ''}`}>
        {showChecked && (
          <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <g filter={`url(#${filterId})`}>
              {indeterminate ? (
                <>
                  <path d="M4.75 8H11.25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M4.75 8H11.25" stroke={`url(#${gradientId})`} strokeOpacity="0.1" strokeWidth="1.5" strokeLinecap="round"/>
                </>
              ) : (
                <>
                  <path d="M4.76562 8.76562L7.11719 11.25L11.25 4.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.76562 8.76562L7.11719 11.25L11.25 4.75" stroke={`url(#${gradientId})`} strokeOpacity="0.1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </>
              )}
            </g>
            <defs>
              <filter id={filterId} x="2.01562" y="2.99991" width="11.9845" height="12.0001" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="1"/>
                <feGaussianBlur stdDeviation="1"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"/>
                <feBlend mode="overlay" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
              <linearGradient id={gradientId} x1="8.00781" y1="4.75" x2="8.00781" y2="11.25" gradientUnits="userSpaceOnUse">
                <stop offset="0.25" stopColor="#3573F6" stopOpacity="0"/>
                <stop offset="1" stopColor="#3573F6"/>
              </linearGradient>
            </defs>
          </svg>
        )}
      </span>
    </label>
  );
}
