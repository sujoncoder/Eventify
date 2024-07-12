import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/HeroSection";
import { getEventById } from "@/Database/queries/queries";

const EventDetailsPage = async ({ params: { id } }) => {
  const eventInfo = await getEventById(id);
  return (
    <>
      <HeroSection eventInfo={eventInfo} />
      <div className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails details={eventInfo?.details} swags={eventInfo?.swags} />
          <EventVenue location={eventInfo?.location} />
        </div>
      </div>
    </>
  );
};

export default EventDetailsPage;
