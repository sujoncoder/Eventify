"use client";

import { addInterestedEvent } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButton = ({
  eventId,
  interestedUserIds = [],
  goingUserIds,
  fromDetails,
}) => {
  const { auth } = useAuth();
  const isInterested = Array.isArray(interestedUserIds)
    ? interestedUserIds.find((id) => id === auth?.id)
    : false;
  const isGoing = goingUserIds.find((id) => id === auth?.id);
  const [interested, setInterested] = useState(isInterested);
  const [going, setGoing] = useState(isGoing);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();

  const toggleInterested = async () => {
    if (auth) {
      await addInterestedEvent(eventId, auth?.id);
      setInterested(!interested);
    } else {
      router.push("/login");
    }
  };

  const markGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}`);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        onClick={() =>
          startTransition(() => {
            toggleInterested();
          })
        }
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>
      <button
        disabled={auth && going}
        onClick={markGoing}
        className="text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButton;
