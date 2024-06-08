import React from "react";
import { Context } from "../../../additionals/Context.ts";
import EventCard from "../../../components/EventCard/EventCard.tsx";

const Favorities = () => {
  const context = React.useContext(Context);

  return (
    <div>
      <div>Favorities:</div>
      {context?.favoritEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Favorities;
