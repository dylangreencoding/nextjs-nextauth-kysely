"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      username: formData.get("username"),
      password: formData.get("password"),
      redirect: false,
    });
    console.log({ response });
    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md p-10 mt-10 bg-blue-950"
    >
      <input name="username" className="text-black" type="username" />
      <input name="password" className="text-black" type="password" />
      <button className="bg-red-950" type="submit">
        login
      </button>
    </form>
  );
}
