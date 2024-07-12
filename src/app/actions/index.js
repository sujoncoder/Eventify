"use server";

import { createUser, findUserByCredebtials } from "@/database/queries/queries";
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
