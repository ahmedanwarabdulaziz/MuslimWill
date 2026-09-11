import type { ReactNode } from 'react';

/**
 * Splits `**bold**` markers into <strong> nodes. Keeps content-author copy
 * (admin-entered strings) out of dangerouslySetInnerHTML entirely.
 */
export function renderBoldText(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
