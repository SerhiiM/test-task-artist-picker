import React, { memo } from "react";
import { Event } from "../../additionals/Types.ts";
import { Context } from "../../additionals/Context.ts";

type Props = {
  event: Event;
};

const EventCard = memo(({ event }: Props) => {
  const context = React.useContext(Context);

  const handleEventSelection = () => {
    context?.setSelectedEvent(event);
  };

  return (
    <div
      className="my-4 border rounded border-gray-300 p-2 hover:bg-sky-100"
      onClick={handleEventSelection}
    >
      <div className="text-lg">{event.title || "Event !"}</div>
      <div>{event.datetime.toString()}</div>
      <div>
        {event.venue.location} / {event.venue.name}
      </div>
    </div>
  );
});

export default EventCard;
