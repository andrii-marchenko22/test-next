"use client";
import Link from "next/link";
import { useAuthStore } from "@/lib/stores/authStore";

const Profile = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <section>
      <h1>My Profile</h1>
      <h2>Hello {user?.userName || "Guest"}</h2>
      <p>
        Some description: Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Cumque non quis, vero consectetur eum at commodi facere error,
        laborum, rerum labore corrupti neque veritatis sed minima et nam. Autem,
        cumque.
      </p>

      <Link href="/profile/edit">Edit profile</Link>
    </section>
  );
};

export default Profile;
