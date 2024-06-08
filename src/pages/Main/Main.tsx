import React, { useState } from "react";
import { Context } from "../../additionals/Context.ts";

import ArtistBar from "./ArtistBar/ArtistBar.tsx";
import ActionBar from "./ActionBar/ActionBar.tsx";
import Favorities from "./Favorities/Favorities.tsx";
import { Artist, Event } from "../../additionals/Types.ts";

const Main = () => {
  const [artist, setArtist] = useState<Artist | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [favoritEvents, setFavoritEvents] = useState<Event[]>(() => {
    const favEvents = localStorage.getItem("FAV_EVENTS");
    if (favEvents) {
      return JSON.parse(favEvents);
    }
    return [];
  });

  return (
    <Context.Provider
      value={{
        artist,
        events,
        selectedEvent,
        favoritEvents,
        setArtist,
        setEvents,
        setSelectedEvent,
        setFavoritEvents,
      }}
    >
      <div className="flex justify-between my-10 mx-20 flex-row max-lg:flex-col max-lg:p-4">
        <ArtistBar />
        <ActionBar />
        <Favorities />
      </div>
    </Context.Provider>
  );
};

export default Main;
