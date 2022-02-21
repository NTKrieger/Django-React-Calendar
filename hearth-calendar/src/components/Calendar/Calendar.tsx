import React, { useMemo } from 'react';
import Cell from '../Cell/Cell';

/*
* This is the calendar component which occupies most of the main view.  It holds the CSS Grid definitions
* and had a memoized generator for the grid elements which contain dates.  Changing the number of <div/> elements
* in the arrayOfCells initialization alters the starting positiong of the first of the month.
*/

export default function Calendar(): JSX.Element {

  const DaysOfFebruary = useMemo<JSX.Element[]>(() => {
    const EmptyCell = <span className="border-b border-gray-900"/>
    const arrayOfCells = [EmptyCell, EmptyCell];
    for(let i=1; i <= 28; ++i){
      arrayOfCells.push(<Cell day={i} />)
    }
    return arrayOfCells;
  }, []);

  return (
    <div className={"w-full h-6/7"}>
      <div className={"grid grid-cols-7 text-center text-2xl font-bold text-gray-900 py-2 border-b-2"}>
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div className={"grid grid-cols-7 text-right text-2xl font-bold text-gray-900 h-full auto-rows-auto"}>
        {DaysOfFebruary}
      </div>
    </div>
  );
}