"use client";

import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav>
      <h2>🏋️ Workout Tracker</h2>
      {session ? (
        <button onClick={() => signOut()}>Logout</button>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}
