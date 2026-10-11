"use client";

import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs">লোড হচ্ছে...</span>
      </div>
    );
  }

  const handleSignout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      console.error("Sign out failed:", error);
      return;
    }

   redirect ("/auth/sign-in");
  };

  return (
    <div className="absolute right-0 flex items-center gap-2 px-2 sm:gap-3 sm:px-4">
  {user ? (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3">
      <Link
        href="/profile"
        className="flex min-w-0 items-center gap-2"
      >
        {user.image?.trim() ? (
          <Image
            src={user.image}
            alt="Profile"
            width={40}
            height={40}
            className="h-8 w-8 shrink-0 rounded-full object-cover sm:h-10 sm:w-10"
          />
        ) : (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-700 font-bold text-white sm:h-10 sm:w-10">
            {user.name?.charAt(0)?.toUpperCase() || "U"}
          </div>
        )}

        <span className="hidden max-w-24 truncate text-sm sm:block md:max-w-36">
          {user.name}
        </span>
      </Link>

      <button
        type="button"
        onClick={handleSignout}
        className="btn btn-error btn-xs whitespace-nowrap sm:btn-sm"
      >
        Sign Out
      </button>
    </div>
  ) : (
    <div className="flex items-center gap-1.5 sm:gap-3">
      <Link
        href="/auth/sign-up"
        className="btn btn-success btn-xs whitespace-nowrap sm:btn-sm"
      >
        Sign Up
      </Link>

      <Link
        href="/auth/sign-in"
        className="btn btn-success btn-xs whitespace-nowrap sm:btn-sm"
      >
        Sign In
      </Link>
    </div>
  )}
</div>
  );
};

export default UserInfo;