import React, { useMemo, useCallback } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectEvents, setFocusEventId } from '../../store/eventSlice'

interface CellProps {
  day: number,
}

export default function Cell({day}:CellProps):JSX.Element {
  const dispatch = useAppDispatch();
  const events = useAppSelector(selectEvents);

  const displayEvent = useCallback<any>((eventId: number) => {
    dispatch(setFocusEventId(eventId));
  }, [dispatch]);

  const eventComponentArray = useMemo<JSX.Element[]| null>(() => {
    const arrayOfEvents:JSX.Element[] = events.map((e:any) => (
      <button className="text-sm text-grey-100 w-full bg-gray-700" 
        onClick={() => displayEvent(e.id)}
      >{e.title}</button>
    ));
    // generate Event components from event Objects
    return arrayOfEvents;
  }, [displayEvent, events]);

  return (
    <div className={"h-full w-full border-l border-b border-gray-500 flex-col last:border-r"}>
      <div className={"text-3xl text-gray-900 pt-2 pr-4 text-right"}>{day}</div>
      {eventComponentArray}
    </div>
  );
}
