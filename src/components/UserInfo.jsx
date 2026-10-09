"use client";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Link from "next/link";
import React from "react";

const UserInfo = () => {
  const { data: session,isPending } = authClient.useSession();
  const user = session?.user;
if(isPending){
  return    <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted">Large</span>
      </div>
}
  const handleSignout = async () => {
    await authClient.signOut();
  };
  
  return (
    <div className="absolute right-0 flex items-center gap-3 pr-4">
      {user ? (
        <div className="flex  items-center gap-2">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img alt="Tailwind-CSS-Avatar-component" src={user.image} />
              <p>{user?.name}</p>
            </div>
          </div>
          
          <button onClick={handleSignout} className="btn btn-error">
            SignOut
          </button>
        </div>
      ) : (
        <div className="gap-3 flex">
          <Link href={"/auth/sign-up"}>
            <button className="btn btn-active btn-success">signUp</button>
          </Link>
          <Link href={"/auth/sign-in"}>
            <button className="btn btn-active btn-success">Signin</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
