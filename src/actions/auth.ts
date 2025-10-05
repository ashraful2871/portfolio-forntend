"use server";
import { FieldValues } from "react-hook-form";

export const register = async (data: FieldValues) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  let responseData;
  try {
    responseData = await res.json();
  } catch {
    responseData = await res.text();
  }

  if (!res.ok) {
    console.error("user registration failed", responseData);
    throw new Error("Registration failed");
  }

  return responseData;
};
