import React, { useMemo } from 'react';
import Cell from '../Cell/Cell';
import styles from './Calendar.module.css';

export default function Counter(): JSX.Element {

  const DaysOfFebruary = useMemo<JSX.Element[]>(() => {
    const arrayOfCells = [];
    for(let i=1; i <= 28; ++i){
      arrayOfCells.push(<Cell key={i}/>)
    }
    return arrayOfCells;
  }, []);

  return (
    <div className={styles.calendar}>
      <div className={styles.dayLabels}>
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div className={styles.cellGrid}>
        {DaysOfFebruary}
      </div>
    </div>
  );
}