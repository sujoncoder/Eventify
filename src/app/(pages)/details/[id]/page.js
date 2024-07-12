import EventDetails from "@/components/details/EventDetails";
import EventVenue from "@/components/details/EventVenue";
import HeroSection from "@/components/details/heroSection";

const DetailsPage = () => {
  return (
    <>
      <HeroSection />
      <div className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <EventVenue />
        </div>
      </div>
    </>
  );
};

export default DetailsPage;
