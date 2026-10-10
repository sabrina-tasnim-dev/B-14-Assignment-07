"use client";

import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

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

    window.location.href = "/auth/sign-in";
  };

  return (
    <div className="absolute right-0 flex items-center gap-3 pr-4">
      {user ? (
        <div className="flex items-center gap-2">
          <Link
            href="/profile"
            className="flex items-center gap-2"
          >
            {user.image?.trim() ? (
              <Image
                src={user.image}
                alt="Profile"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-700 font-bold text-white">
                {user.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
            )}

            <span className="text-sm">{user.name}</span>
          </Link>

          <button
            type="button"
            onClick={handleSignout}
            className="btn btn-error"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div className="flex gap-3">
          <Link href="/auth/sign-up" className="btn btn-active btn-success">
            Sign Up
          </Link>

          <Link href="/auth/sign-in" className="btn btn-active btn-success">
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;