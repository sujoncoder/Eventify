import { eventModel } from "@/models/event-model";
import {
  replaceMongoIdInArray,
  replaceMongoIdInObject,
} from "@/utils/data-utils";

export const getAllEvents = async () => {
  const allEvents = await eventModel.find().lean();
  return replaceMongoIdInArray(allEvents);
};

export const getEventById = async (eventId) => {
  const event = await eventModel.findById(eventId).lean();
  return replaceMongoIdInObject(event);
};
