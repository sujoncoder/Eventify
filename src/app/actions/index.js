"use server";

import {
  createUser,
  findUserByCredebtials,
  updateGoing,
  updateInterest,
} from "@/database/queries/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const registerUser = async (formData) => {
  const user = Object.fromEntries(formData);
  const create = await createUser(user);
  redirect("/login");
};

export const performLogin = async (formData) => {
  try {
    const credential = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const found = await findUserByCredebtials(credential);
    return found;
  } catch (error) {
    throw error;
  }
};

export const addInterestedEvent = async (eventId, authId) => {
  try {
    await updateInterest(eventId, authId);
  } catch (error) {
    throw error;
  }

  revalidatePath("/");
};

export const addGoingEvent = async (eventId, user) => {
  try {
    await updateGoing(eventId, user?.id);
  } catch (error) {
    throw error;
  }

  revalidatePath("/");
  redirect("/");
};
