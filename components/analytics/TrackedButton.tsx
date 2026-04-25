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
  const handleClick = () => {
    trackEvent(eventName, eventParams);

    if (typeof onClick === 'function') {
      onClick(undefined as never);
    }
  };

  return <Button {...props} onClick={handleClick} />;
}
