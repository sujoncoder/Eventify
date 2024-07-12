import EventList from "@/components/home/EventList";
import HomeHeader from "@/components/home/HomeHeader";

export default function Home() {
  return (
    <section className="container">
      <HomeHeader />
      <EventList />
    </section>
  );
}
