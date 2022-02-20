import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import styles from './Cell.module.css';

interface CellProps {
  key: number,
}

export default function Cell({key}:CellProps):JSX.Element {

  const events = useMemo<JSX.Element[]| null>(() => {
    const arrayOfEvents:JSX.Element[] = [];
    // custom selector to get events from state
    // generate Event components from event Objects
    return arrayOfEvents;
  }, []);

  return (
    <div className={styles.outline}>
      <div className={styles.number}>{key}</div>
    </div>
  );
}
