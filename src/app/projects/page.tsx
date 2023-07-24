"use client";

import Profile from "@/components/profile";
import { useProjectStroe } from "@/lib/store";
import React, { useEffect } from "react";

export default function Projects() {
  const { projects, fetchProjects } = useProjectStroe();
  useEffect(() => {
    fetchProjects("6");
  }, []);

  return (
    <div className="bg-gray-900 w-full px-36 py-10 min-h-screen">
      <Profile />
    </div>
  );
}
