'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { trackEvent, type AnalyticsParams } from '@/lib/analytics';

type TrackedButtonProps = React.ComponentProps<typeof Button> & {
  eventName: string;
  eventParams?: AnalyticsParams;
};

export function TrackedButton({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedButtonProps) {
  const handleClick = (e: React.MouseEvent<any, MouseEvent>) => {
    trackEvent(eventName, eventParams);

    if (typeof onClick === 'function') {
      onClick(e);
    }
  };

  return <Button {...props} onClick={handleClick} />;
}
