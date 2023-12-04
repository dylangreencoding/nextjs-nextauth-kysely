"use client";

import { FormEvent } from "react";

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        password: formData.get("password"),
      }),
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md p-10 mt-10 bg-blue-950"
    >
      <input name="username" className="text-black" type="username" />
      <input name="password" className="text-black" type="password" />
      <button className="bg-red-950" type="submit">
        register
      </button>
    </form>
  );
}
