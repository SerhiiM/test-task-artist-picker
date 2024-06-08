import React, { useEffect } from "react";
import { Context } from "../../../additionals/Context.ts";
import { Event } from "../../../additionals/Types.ts";

const ActionBar = () => {
  const context = React.useContext(Context);

  useEffect(() => {
    localStorage.setItem("FAV_EVENTS", JSON.stringify(context?.favoritEvents));
  }, [context?.favoritEvents]);

  const handleAddToFavorites = () => {
    if (
      context?.selectedEvent &&
      !context?.favoritEvents.some(
        (fe: Event) => fe.id === context.selectedEvent?.id
      )
    ) {
      context?.setFavoritEvents([
        ...context.favoritEvents,
        context.selectedEvent,
      ]);
    }
  };

  const handleRemoveToFavorites = () => {
    if (
      context?.selectedEvent &&
      context?.favoritEvents.some(
        (fe: Event) => fe.id === context.selectedEvent?.id
      )
    ) {
      context?.setFavoritEvents(
        context.favoritEvents.filter((e) => e.id !== context.selectedEvent?.id)
      );
    }
  };

  return (
    <div>
      <div className="text-xl mb-6">Selected event information</div>
      {context?.selectedEvent && (
        <>
          {" "}
          <div>
            <div className="text-lg">
              {context.selectedEvent.title || "Event !"}
            </div>
            <div>{context.selectedEvent.datetime.toString()}</div>
            <div>
              {context.selectedEvent.venue.location} /{" "}
              {context.selectedEvent.venue.name}
            </div>
          </div>
          {context.selectedEvent.offers.length > 0 && (
            <div>
              <div className="my-4">Offers:</div>
              {context.selectedEvent.offers.map((offer) => (
                <div className="p-2 border rounded" key={offer.url}>
                  <div>{offer.type}</div>
                  <div>
                    <a href={offer.url}>Buy a ticket</a>
                  </div>
                  <div>{offer.status}</div>
                </div>
              ))}
            </div>
          )}
          <div className="flex mt-6">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={handleAddToFavorites}
            >
              Add to favorites
            </button>
            <button
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
              onClick={handleRemoveToFavorites}
            >
              Remove from favorites
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ActionBar;
