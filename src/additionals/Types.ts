export type Artist = {
    name: string;
    image_url: string;
    facebook_page_url: string;
};

export type Event = {
    id: string,
    datetime: Date,
    title: string,
    venue: {
      location: string,
      name: string
    },
    offers: {
      type: string,
      url: string,
      status: string
    }[],
};

export type GlobalState = {
  artist: Artist | null;
  setArtist: React.Dispatch<React.SetStateAction<Artist | null>>;

  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;

  selectedEvent: Event | null;
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>;

  favoritEvents: Event[];
  setFavoritEvents: React.Dispatch<React.SetStateAction<Event[]>>;
};