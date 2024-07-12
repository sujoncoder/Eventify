import { eventModel } from "@/models/event-model";
import { userModel } from "@/models/user-model";
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

export const createUser = async (user) => {
  return await userModel.create(user);
};

export const findUserByCredebtials = async (credentials) => {
  const user = await userModel.findOne(credentials).lean();

  if (user) {
    return replaceMongoIdInObject(user);
  }
  return null;
};
