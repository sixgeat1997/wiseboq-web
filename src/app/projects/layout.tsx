import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WiseBoQ",
  description: "Generated by create next app",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" min-h-screen">{children}</div>;
}