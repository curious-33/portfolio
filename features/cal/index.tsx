'use client';

import Cal from '@calcom/embed-react';

export default function CalEmbed() {
  return (
    <div className="cal-embed">
      <Cal namespace="30min" calLink="curious-33/30min" />
    </div>
  );
}
