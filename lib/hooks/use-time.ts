'use client';

import { useSyncExternalStore } from 'react';

const timeFormat: Intl.DateTimeFormatOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
};

function formatNow() {
  return new Date().toLocaleString('en-US', timeFormat);
}

function subscribe(onStoreChange: () => void) {
  const interval = setInterval(onStoreChange, 1000);
  return () => clearInterval(interval);
}

function getSnapshot() {
  return formatNow();
}

function getServerSnapshot() {
  return '';
}

export function useTime() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
