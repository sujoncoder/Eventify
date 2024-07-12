"use client";

import { performLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { setAuth } = useAuth();
  const router = useRouter();

  // HANDLE LOGIN FORM
  const handleLoginForm = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.currentTarget);
      const found = await performLogin(formData);

      if (found) {
        setAuth(found);
        router.push("/");
      } else {
        setError("Please provide a valid credential.");
        toast.error("Please provide a valid credential.");
      }
    } catch (error) {
      setError(error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <Toaster />
      <div className="p-8 space-y-8 bg-white rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Login</h2>
        <form onSubmit={handleLoginForm} className="space-y-4">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="********"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log in
            </button>
            <span className="text-slate-600 text-sm block mt-2">
              Here to new?{" "}
              <Link href="/register" className="text-blue-500 hover:underline">
                Register
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
