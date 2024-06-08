import React, { useCallback, useEffect } from "react";
import { Context } from "../../../additionals/Context.ts";
import debounce from "lodash.debounce";
import EventCard from "../../../components/EventCard/EventCard.tsx";

const ArtistBar = () => {
  const context = React.useContext(Context);

  useEffect(() => {
    context?.setEvents([]);
    context?.setSelectedEvent(null);
    if (context?.artist) {
      fetch(
        `${process.env.REACT_APP_API_URL}/artists/${context.artist.name}/events?app_id=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => {
          response.json().then((events) => {
            context?.setEvents(events);
          });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, [context?.artist?.name]);

  const handleSearch = useCallback(
    (event) => {
      if (event.target.value) {
        fetch(
          `${process.env.REACT_APP_API_URL}/artists/${event.target.value}?app_id=${process.env.REACT_APP_API_KEY}`
        )
          .then((response) => {
            response.json().then((artist) => {
              context?.setArtist(artist);
            });
          })
          .catch((err) => {
            console.log("err", err);
          });
      } else {
        context?.setArtist(null);
      }
    },
    [context]
  );

  const debouncedHandleSearch = debounce(handleSearch, 300);

  return (
    <div>
      <div>
        <input
          onChange={debouncedHandleSearch}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5"
          placeholder="Search Artist"
        />
      </div>
      {context?.artist && (
        <div>
          <div className="flex my-6">
            <img src={context.artist.image_url} width={200} alt="" />
            <div className="p-16">
              <div className="text-xl">Artist: {context.artist.name}</div>
              <div className="text-lg">
                Group:{" "}
                <a
                  href={context.artist.facebook_page_url}
                  className="underline"
                >
                  facebook
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {context.events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistBar;
