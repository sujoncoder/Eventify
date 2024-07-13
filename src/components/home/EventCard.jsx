import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ActionButton";

const EventCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={event?.imageUrl}
        width={500}
        height={500}
        alt={event?.name}
        className="w-full"
      />
      <div className="p-3">
        <Link href={`/details/${event?.id}`} className="font-bold text-lg">
          {event?.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event?.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{event?.interested_ids?.length} Interested</span>
          <span className="mx-1">|</span>
          <span>{event?.going_ids?.length} Going</span>
        </div>
        <ActionButton
          eventId={event?.id}
          interestedUserIds={event?.interestedUserIds}
          goingUserIds={event?.going_ids}
        />
      </div>
    </div>
  );
};

export default EventCard;
