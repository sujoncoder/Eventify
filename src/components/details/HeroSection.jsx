import Image from "next/image";
import ActionButton from "../ActionButton";

const HeroSection = ({ eventInfo }) => {
  const { id, imageUrl, name, location, interested_ids, going_ids } = eventInfo;
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={imageUrl}
          width={500}
          height={500}
          alt={name}
          className="w-full h-[600px] object-cover mx-auto rounded-lg"
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">{name}</h1>
          <p className="text-[#9C9C9C] text-base mt-1">{location}</p>
          <div className="text-[#737373] text-sm mt-1">
            <span>{interested_ids?.length} Interested</span>
            <span>|</span>
            <span>{going_ids?.length} Going</span>
          </div>
        </div>

        <ActionButton
          fromDetails={true}
          eventId={id}
          interestedUserIds={interested_ids}
          goingUserIds={going_ids}
        />
      </div>
    </section>
  );
};

export default HeroSection;
