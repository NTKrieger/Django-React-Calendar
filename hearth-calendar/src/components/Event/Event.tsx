import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from './Cell.module.css';

interface CalendarEvent {
  title: string,
  description?: string,
  date: Date,
}

interface EventProps {
  event: CalendarEvent,
}

export default function Event({event}:EventProps):JSX.Element {

  return (
    <div className={styles.outline}>
      <div className={styles.title}>{event.title || 'title'}</div>
      <div className={styles.description}>{event.description|| '(no description)'}</div>
      <div className={styles.title}>{event.date || 'title'}</div>
    </div>
  );
}
