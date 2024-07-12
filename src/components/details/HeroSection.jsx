import Image from "next/image";
import ActionButton from "../ActionButton";
import GoogleIO from "/public/assets/event/google-io.png";

const HeroSection = () => {
  return (
    <section className="container">
      <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
        <Image
          src={GoogleIO}
          alt="Event 1"
          className="h-[450px] mx-auto rounded-lg"
        />
      </div>

      <div className="flex items-end">
        <div className="flex-auto py-4">
          <h1 className="font-bold text-2xl">Google I/O Extended</h1>
          <p className="text-[#9C9C9C] text-base mt-1">
            Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
          </p>
          <div className="text-[#737373] text-sm mt-1">
            <span>1k Interested</span>
            <span>|</span>
            <span>40K Going</span>
          </div>
        </div>

        <ActionButton fromDetails={true} />
      </div>
    </section>
  );
};

export default HeroSection;
