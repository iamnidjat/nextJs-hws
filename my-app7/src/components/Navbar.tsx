'use client'
import React, { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated" && session) {
      const { user } = session;
      console.log(user?.name);
      console.log(user?.email);
      console.log(user?.image);
    }
  }, [session, status]);

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {status === "authenticated" ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleSignIn}>Sign In</button>
      )}
    </div>
  );
};

export default Navbar;

