import React, { useMemo } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

interface CellProps {
  day: number,
}

export default function Cell({day}:CellProps):JSX.Element {

  const events = useMemo<JSX.Element[]| null>(() => {
    const arrayOfEvents:JSX.Element[] = [];
    // custom selector to get events from state
    // generate Event components from event Objects
    return arrayOfEvents;
  }, []);

  return (
    <div className={"h-full w-full border-l border-b border-gray-500 flex-col last:border-r"}>
      <div className={"text-3xl text-gray-900 pt-2 pr-4 text-right"}>{day}</div>
      {events}
    </div>
  );
}
