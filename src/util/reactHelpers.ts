import { SyntheticEvent } from 'react';

export const unwrapEvent = (event: SyntheticEvent) => {
  const eventElement: HTMLInputElement = (event.target as HTMLInputElement);
  return eventElement.value;
};