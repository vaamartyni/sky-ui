import React from 'react';
import { ReactNode } from 'react';
import './styles.css';
export interface IButton {
  children?: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'warning' | 'experimental';
  disabled?: boolean;
}
export function Button({
  children,
  onClick = () => {},
  disabled = false,
  variant = 'primary',
}: IButton) {
  const className = `button button-${variant}`;
  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
