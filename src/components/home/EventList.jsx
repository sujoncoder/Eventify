import { getAllEvents } from "@/database/queries/queries";
import EventCard from "./EventCard";

const EventList = async () => {
  const allEvents = await getAllEvents();
  console.log(allEvents);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {allEvents.map((event) => (
        <EventCard key={event?.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
