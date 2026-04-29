import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'interactive';
  style?: React.CSSProperties;
}

export function Card({ children, className = '', variant = 'default', style }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[variant]} ${className}`} style={style}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CardContent({ children, className = '', style }: CardContentProps) {
  return <div className={`${styles.content} ${className}`} style={style}>{children}</div>;
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
  return <h3 className={`${styles.title} ${className}`}>{children}</h3>;
}
