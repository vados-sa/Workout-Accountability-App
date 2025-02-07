"use client";

import Navbar from '../components/navbar';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login"); // Redirect if not logged in
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>; // Show a loading message while checking session
  }

  return (
    <div>
      <Navbar />
      <h1>Welcome to the Workout Tracker!</h1>
      <p>Hello, {session?.user?.name || "Athlete"}!</p>
    </div>
  );
}


